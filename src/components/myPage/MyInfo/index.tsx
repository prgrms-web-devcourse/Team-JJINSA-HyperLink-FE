import { Avatar, Button, Dropdown, Input, Text } from '@/components/common';
import * as style from './style.css';
import { useRef, useState } from 'react';
import useInput from '@/hooks/useInput';
import { myInfo } from '@/types/myInfo';
import { deleteFileFromS3, uploadFileToS3 } from '@/api/s3Image';
import { updateMyInfo, updateProfileImage } from '@/api/member';
import { useQuery } from '@tanstack/react-query';
import { CAREERS, CATEGORIES, REVERSE_CAREERS } from '@/utils/constants/signup';
import CertificationModal from '@/components/modal/certification';
import { CATEGORY } from '@/utils/constants/category';

const MyInfo = ({ myInfo }: { myInfo: myInfo }) => {
  const { email, nickname, profileUrl, career, careerYear, companyName } =
    myInfo;

  const [newProfileImage, setNewProfileImage] = useState(profileUrl);
  const [imageFile, setImageFile] = useState<File | null>();
  const { value: newNickname, onChange: onChangeNewNickname } =
    useInput(nickname);
  const [newCareer, setNewCareer] = useState(CATEGORY[career]);
  const [newCareerYear, setNewCareerYear] = useState(
    REVERSE_CAREERS[careerYear]
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { refetch } = useQuery(
    ['updateMyInfo'],
    () =>
      updateMyInfo({
        nickname: newNickname,
        career: CATEGORIES[newCareer],
        careerYear: CAREERS[newCareerYear],
      }),
    { enabled: false }
  );

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

  const saveImgFile = async () => {
    const file = imgRef.current?.files && imgRef.current?.files[0];

    if (file) {
      setImageFile(file);
      const src = await uploadFileToS3(file, 'profile');
      if (typeof src === 'string') {
        setNewProfileImage(src);
      }
    }
  };

  const handleSubmit = async () => {
    if (isUpdating) return;

    setIsUpdating(true);
    const response = await refetch();
    setIsUpdating(false);

    console.log(response.status);

    if (response.status === 'success') {
      await updateProfileImage(newProfileImage);
      await deleteFileFromS3(profileUrl);
      alert('프로필이 변경되었습니다');
    } else alert('잠시 후 시도해주세요');
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
          사진 변경하기
        </div>
      </div>
      <Input type="email" label="이메일" value={email} readOnly />
      <Input
        label="소속 회사"
        placeholder="아직 인증된 회사가 없습니다."
        value={companyName}
        readOnly
      />
      <div
        className={style.companyText}
        onClick={() => setIsVisibleModal(true)}
      >
        <Text>소속 회사 인증하기</Text>
        {isVisibleModal && (
          <CertificationModal
            isOpen={isVisibleModal}
            onClose={() => setIsVisibleModal(false)}
          />
        )}
      </div>
      <Input
        label="닉네임"
        value={newNickname}
        onChange={onChangeNewNickname}
      />
      <div className={style.dropdownWrapper}>
        <Dropdown
          placeholder="선택해주세요"
          label="직군/경력"
          value={newCareer}
          items={Object.keys(CATEGORIES)}
          onItemClick={(item: string) => {
            handleItemClick(item, 'career');
          }}
        />
        <Dropdown
          placeholder="선택해주세요"
          value={newCareerYear}
          items={Object.keys(CAREERS)}
          onItemClick={(item: string) => handleItemClick(item, 'careerYear')}
        />
      </div>
      <Button
        text="프로필 변경 완료"
        disabled={isUpdating}
        onClick={handleSubmit}
      />
    </>
  );
};

export default MyInfo;
