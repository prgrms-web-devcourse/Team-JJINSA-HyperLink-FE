import { Avatar, Button, Dropdown, Input, Text } from '@/components/common';
import * as style from './style.css';
import { useRef, useState } from 'react';
import useInput from '@/hooks/useInput';
import { myInfo } from '@/types/myInfo';
import { deleteFileFromS3, uploadFileToS3 } from '@/api/s3Image';
import { updateMyInfo, updateProfileImage } from '@/api/member';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CAREERS, CATEGORIES, REVERSE_CAREERS } from '@/utils/constants/signup';
import CertificationModal from '@/components/modal/certification';
import { CATEGORY } from '@/utils/constants/category';

const MyInfo = ({ myInfo }: { myInfo: myInfo }) => {
  const queryClient = useQueryClient();
  const { email, nickname, profileUrl, career, careerYear, companyName } =
    myInfo;

  const [newProfileImage, setNewProfileImage] = useState(profileUrl);
  const { value: newNickname, onChange: onChangeNewNickname } =
    useInput(nickname);
  const [newCareer, setNewCareer] = useState(CATEGORY[career]);
  const [newCareerYear, setNewCareerYear] = useState(
    REVERSE_CAREERS[careerYear]
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleItemClick = (item: string, type: string) => {
    switch (type) {
      case 'career':
        setNewCareer(item);
        return;
      case 'careerYear':
        setNewCareerYear(item);
        return;
    }
  };

  const imgRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    if (!imgRef.current) {
      return;
    }
    imgRef.current.click();
  };

  const mutation = useMutation({
    mutationFn: async () => {
      await updateMyInfo({
        nickname: newNickname,
        career: CATEGORIES[newCareer],
        careerYear: CAREERS[newCareerYear],
      });
      if (profileUrl !== newProfileImage) {
        await updateProfileImage(newProfileImage);
        deleteFileFromS3(profileUrl);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myInfo']);
      alert('???????????? ?????????????????????');
    },
  });

  const saveImgFile = async () => {
    const file = imgRef.current?.files && imgRef.current?.files[0];

    if (file) {
      const src = await uploadFileToS3(file, 'profile');
      if (typeof src === 'string') {
        setNewProfileImage(src);
      }
    }
  };

  const handleSubmit = async () => {
    if (isUpdating) return;

    setIsUpdating(true);
    mutation.mutate();
    setIsUpdating(false);
  };

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className={style.avatarWrapper}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleAvatarClick}
      >
        <input
          className={style.input}
          type="file"
          accept="image/*"
          ref={imgRef}
          onChange={saveImgFile}
        />
        <Avatar
          src={newProfileImage}
          shape="circle"
          size="xLarge"
          className={`${style.avatar}  ${isHovering && style.hoverAvatar}`}
        />
        <div className={`${style.avatarText} ${isHovering && style.hoverText}`}>
          ?????? ????????????
        </div>
      </div>
      <Input type="email" label="?????????" value={email} readOnly />
      <Input
        label="?????? ??????"
        placeholder="?????? ????????? ????????? ????????????."
        value={companyName || ''}
        readOnly
      />
      <div
        className={style.companyText}
        onClick={() => setIsVisibleModal(true)}
      >
        <Text>?????? ?????? ????????????</Text>
        {isVisibleModal && (
          <CertificationModal
            isOpen={isVisibleModal}
            onClose={() => setIsVisibleModal(false)}
          />
        )}
      </div>
      <Input
        label="?????????"
        value={newNickname}
        onChange={onChangeNewNickname}
      />
      <div className={style.dropdownWrapper}>
        <Dropdown
          placeholder="??????????????????"
          label="??????/??????"
          value={newCareer}
          items={Object.keys(CATEGORIES)}
          onItemClick={(item: string) => {
            handleItemClick(item, 'career');
          }}
        />
        <Dropdown
          placeholder="??????????????????"
          value={newCareerYear}
          items={Object.keys(CAREERS)}
          onItemClick={(item: string) => handleItemClick(item, 'careerYear')}
        />
      </div>
      <Button
        text="????????? ?????? ??????"
        disabled={isUpdating}
        onClick={handleSubmit}
      />
    </>
  );
};

export default MyInfo;
