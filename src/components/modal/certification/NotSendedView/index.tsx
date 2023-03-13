import { sendCompanyEmail } from '@/api/companies';
import { Input, Text, Button } from '@/components/common';
import useInput from '@/hooks/useInput';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import * as style from './style.css';

type NotSendedViewProps = {
  setIsSendTrue: () => void;
  setEmail: (email: string) => void;
};

const NotSendedView = ({ setIsSendTrue, setEmail }: NotSendedViewProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { value: email, onChange: handleEmailChange } = useInput('');
  const [isError, setIsError] = useState(false);
  const { refetch } = useQuery(
    ['companiesAuth'],
    () => sendCompanyEmail(email),
    { enabled: false }
  );

  const handleSubmit = () => {
    const emailValidationRegex =
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    const isValid = emailValidationRegex.test(email.trim());

    if (isValid) {
      setIsDisabled(true);
      refetch();
      setIsDisabled(false);
      setIsSendTrue();
      setEmail(email);
      setIsError(false);
      return;
    }

    setIsError(true);
  };
  return (
    <>
      <div className={style.modalInputWrapper}>
        <Input
          placeholder="hyperlink@hl.ac.kr"
          label="이메일"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {isError && (
          <div className={style.textWrapper}>
            <Text size="xSmall" color="red">
              이메일이 유효하지 않습니다
            </Text>
          </div>
        )}
        <Text block size="small" color="#484848">
          * 해당 정보는 게시글 추천 용도로 사용됩니다.
          <br />* 인증된 메일은 모두 비공개로 관리됩니다.
        </Text>
      </div>
      <Button
        text="인증 메일 전송하기"
        isBold
        onClick={handleSubmit}
        disabled={isDisabled}
      />
    </>
  );
};

export default NotSendedView;
