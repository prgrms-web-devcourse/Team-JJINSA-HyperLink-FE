import { verificationCompany } from '@/api/companies';
import { uploadFileToS3 } from '@/api/s3Image';
import { Avatar, Button, Input, Text } from '@/components/common';
import useInput from '@/hooks/useInput';
import { color } from '@/styles/variants.css';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import * as style from './style.css';

const SendedView = ({ email }: { email: string }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [companyLogoUrl, setCompanyLogoUrl] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const { value, onChange } = useInput('');

  const { refetch } = useQuery(
    ['companieyVerification'],
    () =>
      verificationCompany({
        companyEmail: email,
        verification: value,
        logoImgUrl: companyLogoUrl,
      }),
    { enabled: false }
  );

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
      const src = await uploadFileToS3(file, 'logo');
      if (typeof src === 'string') {
        setCompanyLogoUrl(src);
      }
    }
  };

  const handleSubmit = async () => {
    if (!value || !companyLogoUrl) {
      alert('인증번호/로고를 등록해주세요');
      return;
    }

    if (attemptCount < 5) {
      setAttemptCount(attemptCount + 1);
      const response = await refetch();

      if (response.status === 'success') {
        setIsVerified(true);
        setIsError(false);
        return;
      }

      setIsError(true);
    }
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
              readOnly={attemptCount >= 5}
            />
            {isError && (
              <div className={style.textWrapper}>
                <Text size="xSmall" color="red">
                  인증 번호가 유효하지 않습니다 (인증 가능 횟수 {attemptCount}
                  /5)
                </Text>
              </div>
            )}
            <div>
              <div className={style.companyTextWrapper}>
                <Text block>회사 로고</Text>
              </div>
              <input
                className={style.input}
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={saveImgFile}
              />
              <div onClick={handleAvatarClick} className={style.avatarWrapper}>
                <Avatar
                  src={companyLogoUrl}
                  className={style.avatar}
                  size="large"
                />
              </div>
            </div>
            <Button text="소속 회사 인증하기" isBold onClick={handleSubmit} />
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
