import { uploadFileToS3 } from '@/api/s3Image';
import { Avatar, Button, Dropdown, Input } from '@/components/common';
import useInput from '@/hooks/useInput';
import { CATEGORIES } from '@/utils/constants/signup';
import { useEffect, useRef, useState } from 'react';
import * as style from './style.css';
import user from '/assets/user.svg';

const AddCreator = () => {
  const [ableSubmit, setAbleSubmit] = useState(false);

  const [profileUrl, setProfileUrl] = useState<string | undefined>(undefined);
  const imgRef = useRef<HTMLInputElement>(null);

  const name = useInput('');
  const description = useInput('');
  const categoryName = useInput('');

  const handleResetInputs = () => {
    name.onChange('');
    description.onChange('');
    categoryName.onChange('');
  };

  const handleAvatarClick = () => {
    imgRef?.current?.click();
  };

  const handleChangeImage = async () => {
    const file = imgRef.current?.files?.[0];

    if (!file) {
      return;
    }

    setProfileUrl(await uploadFileToS3(file));
  };

  useEffect(() => {
    setAbleSubmit(
      name.value && description.value && categoryName.value ? true : false
    );
  }, [name.value, description.value, categoryName.value]);

  return (
    <div className={style.container}>
      <span className={style.avatarContainer} onClick={handleAvatarClick}>
        <input
          className={style.input}
          type="file"
          accept="image/*"
          ref={imgRef}
          onChange={handleChangeImage}
        />
        <Avatar size="xLarge" src={profileUrl || user} />
      </span>
      <Input
        label="이름"
        placeholder="이름을 입력하세요."
        value={name.value}
        onChange={name.onChange}
      />
      <Input
        label="설명"
        placeholder="설명을 입력하세요."
        value={description.value}
        onChange={description.onChange}
      />
      <Dropdown
        label="카테고리"
        placeholder="카테고리를 선택하세요."
        items={Object.keys(CATEGORIES)}
        value={categoryName.value}
        onItemClick={categoryName.onChange}
      />
      <div className={style.buttonContainer}>
        <Button
          paddingSize="full"
          fontSize="medium"
          text="추가"
          disabled={!ableSubmit}
        />
        <Button
          paddingSize="full"
          fontSize="medium"
          text="초기화"
          version="blueInverted"
          onClick={handleResetInputs}
        />
      </div>
    </div>
  );
};

export default AddCreator;
