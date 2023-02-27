import { Button, Divider, Dropdown, Heading } from '@/components/common';
import { useEffect, useState } from 'react';
import * as style from './style.css';

export type WorkInfoProps = {
  nickname: string;
  inputs: {
    job: string;
    career: string;
    setJob: (item: string) => void;
    setCareer: (item: string) => void;
  };
  onPrevClick: () => void;
  onNextClick: () => void;
};

const JOBS = ['개발', '경제, 금융', '패션, 뷰티', '기타'];
const CAREERS = [
  '1년 미만',
  '1년',
  '2년',
  '3년',
  '4년',
  '5년',
  '6년',
  '7년',
  '8년',
  '9년',
  '10년',
  '10년 이상',
];

const WorkInfo = ({
  nickname,
  inputs,
  onPrevClick,
  onNextClick,
}: WorkInfoProps) => {
  const { job, career, setJob, setCareer } = inputs;
  const [ableSubmit, setAbleSubmit] = useState(false);

  useEffect(() => {
    setAbleSubmit(job && career ? true : false);
  }, [job, career]);

  return (
    <div>
      <Heading level={4}>
        {nickname}님은
        <p />
        현재 어떤 일을 하고 계시나요?
      </Heading>
      <Divider />
      <form className={style.form}>
        <Dropdown
          label="직군"
          placeholder="직군을 선택하세요."
          items={JOBS}
          value={job}
          onItemClick={(item) => setJob(item)}
        />
        <Dropdown
          label="경력"
          placeholder="경력을 선택하세요."
          items={CAREERS}
          value={career}
          onItemClick={(item) => setCareer(item)}
        />
        <div className={style.buttonContainer}>
          <Button
            version="blueInverted"
            fontSize="medium"
            paddingSize="small"
            text="이전"
            onClick={onPrevClick}
            style={{ width: '10rem' }}
          />
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

export default WorkInfo;
