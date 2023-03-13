import { verificationCompany } from '@/api/companies';
import { Button, Input, Text } from '@/components/common';
import useInput from '@/hooks/useInput';
import { color } from '@/styles/variants.css';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import * as style from './style.css';

type SendedViewProps = {
  setIsSendFalse: () => void;
  email: string;
};

const SendedView = ({ email, setIsSendFalse }: SendedViewProps) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { value, onChange } = useInput('');

  const { refetch } = useQuery(
    ['companieyVerification'],
    () =>
      verificationCompany({
        companyEmail: email,
        authNumber: parseInt(value),
      }),
    { enabled: false }
  );

  const handleSubmit = async () => {
    if (!value) {
      alert('인증번호를 입력해주세요');
      return;
    }

    setIsDisabled(true);
    const response = await refetch();
    setIsDisabled(false);

    if (response.status === 'success') {
      setIsVerified(true);
      setIsError(false);
      return;
    }

    setIsError(true);
  };
  return (
    <>
      {!isVerified ? (
        <>
          <div className={style.modalInputWrapper}>
            <Text block weight={600} color={color.primary}>
              {email}
            </Text>
            <Text block size="small" color="#484848">
              위 주소로 인증 메일이 발송되었습니다.
              <br />
              메일이 확인되지 않는다면 &#91;스팸함&#93;을 확인해주세요.
            </Text>
            <Input
              label="인증 번호"
              placeholder="인증 번호를 입력해주세요"
              value={value}
              onChange={onChange}
            />
            {isError && (
              <div className={style.textWrapper}>
                <Text size="xSmall" color="red">
                  인증 번호가 유효하지 않습니다&nbsp; (
                  <span
                    className={style.underlineText}
                    onClick={setIsSendFalse}
                  >
                    인증 메일 재전송
                  </span>
                  )
                </Text>
              </div>
            )}
            <div className={style.button}>
              <Button
                text="소속 회사 인증하기"
                isBold
                onClick={handleSubmit}
                disabled={isDisabled}
                paddingSize="full"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <Text>정상적으로 인증되었습니다.</Text>
        </>
      )}
    </>
  );
};

export default SendedView;
