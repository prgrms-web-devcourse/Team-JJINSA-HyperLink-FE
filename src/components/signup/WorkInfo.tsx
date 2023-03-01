import { Button, Divider, Dropdown, Heading } from '@/components/common';
import { CAREERS, JOBS } from '@/utils/constants/signup';
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
  slideDirection: 'left' | 'right';
  onPrevClick: () => void;
  onNextClick: () => void;
};

const WorkInfo = ({
  nickname,
  inputs,
  slideDirection,
  onPrevClick,
  onNextClick,
}: WorkInfoProps) => {
  const { job, career, setJob, setCareer } = inputs;
  const [ableSubmit, setAbleSubmit] = useState(false);

  useEffect(() => {
    setAbleSubmit(job && career ? true : false);
  }, [job, career]);

  return (
    <div className={style.wrapper({ slideDirection })}>
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
          items={Object.keys(JOBS)}
          value={job}
          onItemClick={(item) => setJob(item)}
        />
        <Dropdown
          label="경력"
          placeholder="경력을 선택하세요."
          items={Object.keys(CAREERS)}
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
