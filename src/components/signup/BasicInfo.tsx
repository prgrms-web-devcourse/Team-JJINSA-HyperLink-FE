import { Button, Divider, Dropdown, Heading, Input } from '@/components/common';
import { BIRTH_YEARS, GENDERS } from '@/utils/constants/signup';
import { useEffect, useState } from 'react';
import * as style from './style.css';

export type BasicInfoProps = {
  email: string;
  inputs: {
    nickname: string;
    birthYear: string;
    gender: string;
    setNickname: (item: string) => void;
    setBirthYear: (item: string) => void;
    setGender: (item: string) => void;
  };
  slideDirection: 'left' | 'right';
  onNextClick: () => void;
};

const BasicInfo = ({
  email,
  inputs,
  slideDirection,
  onNextClick,
}: BasicInfoProps) => {
  const { nickname, birthYear, gender, setNickname, setBirthYear, setGender } =
    inputs;
  const [ableSubmit, setAbleSubmit] = useState(false);

  useEffect(() => {
    setAbleSubmit(nickname && birthYear && gender ? true : false);
  }, [nickname, birthYear, gender]);

  return (
    <div className={style.wrapper({ slideDirection })}>
      <Heading level={4}>
        HyperLink에서 회원님을
        <p />
        어떻게 불러드리면 좋을까요?
      </Heading>
      <Divider />
      <form className={style.form}>
        <Input label="이메일" readOnly value={email} />
        <Input
          label="닉네임"
          placeholder="닉네임을 입력하세요."
          value={nickname}
          onChange={setNickname}
        />
        <Dropdown
          label="출생년도"
          placeholder="출생년도를 선택하세요."
          items={BIRTH_YEARS}
          value={birthYear}
          onItemClick={(item) => setBirthYear(item)}
        />
        <Dropdown
          label="성별"
          placeholder="성별을 선택하세요."
          items={Object.keys(GENDERS)}
          value={gender}
          onItemClick={(item) => setGender(item)}
        />
        <div className={style.buttonContainer}>
          <Button
            fontSize="medium"
            paddingSize="full"
            text="다음 단계로 이동"
            disabled={!ableSubmit}
            onClick={onNextClick}
          />
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
