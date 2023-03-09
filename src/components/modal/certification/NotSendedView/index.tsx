import { sendCompanyEmail } from '@/api/companies';
import { Input, Text, Button } from '@/components/common';
import useInput from '@/hooks/useInput';
import { useQuery } from '@tanstack/react-query';
import * as style from './style.css';

type NotSendedViewProps = {
  setIsSendTrue: () => void;
  setEmail: (email: string) => void;
};

const NotSendedView = ({ setIsSendTrue, setEmail }: NotSendedViewProps) => {
  const { value: email, onChange: handleEmailChange } = useInput('');
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
      refetch();
      setIsSendTrue();
      setEmail(email);
    }
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
        <Text block size="small" color="#484848">
          * 해당 정보는 게시글 추천 용도로 사용됩니다.
          <br />* 인증된 메일은 모두 비공개로 관리됩니다.
        </Text>
      </div>
      <Button text="인증 메일 전송하기" isBold onClick={handleSubmit} />
    </>
  );
};

export default NotSendedView;
