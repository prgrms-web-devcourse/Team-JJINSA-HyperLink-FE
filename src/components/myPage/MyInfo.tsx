import { Avatar, Button, Dropdown, Input } from '@/components/common';
import * as style from './style.css';
import { useState } from 'react';
import useInput from '@/hooks/useInput';
import { myInfo } from '@/types/myInfo';

const CAREER_ITEMS = ['개발', '기획', '디자인'];
const CAREER_YEAR_ITEMS = ['1년 미만', '1년', '2년'];

const MyInfo = ({ myInfo }: { myInfo: myInfo }) => {
  const { email, nickname, profileImage, career, careerYear } = myInfo;

  const [newProfileImage, setNewProfileImage] = useState(profileImage);
  const { value: newNickname, onChange: onChangeNewNickname } =
    useInput(nickname);
  const [newCareer, setNewCareer] = useState(career);
  const [newCareerYear, setNewCareerYear] = useState(careerYear);

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

  const handleSubmit = () => {
    // 회원 정보 변경시 로직
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
      >
        <div className={`${style.avatar}  ${isHovering && style.hoverAvatar}`}>
          <Avatar src={newProfileImage} shape="circle" size="xLarge" />
        </div>
        <div className={`${style.avatarText} ${isHovering && style.hoverText}`}>
          사진 변경하기
        </div>
      </div>
      <Input type="email" label="이메일" value={email} readOnly />
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
          items={CAREER_ITEMS}
          onItemClick={(item: string) => {
            handleItemClick(item, 'career');
          }}
        />
        <Dropdown
          placeholder="선택해주세요"
          value={newCareerYear}
          items={CAREER_YEAR_ITEMS}
          onItemClick={(item: string) => {
            handleItemClick(item, 'careerYear');
          }}
        />
      </div>
      <Button text="프로필 변경 완료" />
    </>
  );
};

export default MyInfo;
