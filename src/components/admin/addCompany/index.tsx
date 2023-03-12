import { addCompany } from '@/api/admin';
import { deleteFileFromS3, uploadFileToS3 } from '@/api/s3Image';
import { Avatar, Button, Input } from '@/components/common';
import useInput from '@/hooks/useInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import * as style from './style.css';
import user from '/assets/user.svg';

const AddCompany = () => {
  const queryClient = useQueryClient();

  const [ableSubmit, setAbleSubmit] = useState(false);

  const [logoImgUrl, setLogoImgUrl] = useState<string>('');
  const imgRef = useRef<HTMLInputElement>(null);

  const companyName = useInput('');
  const emailAddress = useInput('');

  const handleResetInputs = () => {
    companyName.onChange('');
    emailAddress.onChange('');

    if (imgRef.current) {
      imgRef.current.files = new DataTransfer().files;
    }

    setLogoImgUrl('');
  };

  const handleAvatarClick = () => {
    imgRef?.current?.click();
  };

  const handleChangeImage = async () => {
    const file = imgRef.current?.files?.[0];

    if (!file) {
      return;
    }

    const prevLogoImgUrl = logoImgUrl;

    setLogoImgUrl((await uploadFileToS3(file, 'logo')) || '');

    if (prevLogoImgUrl) {
      await deleteFileFromS3(prevLogoImgUrl);
    }
  };

  const addCompanyMutation = useMutation({
    mutationFn: addCompany,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['notUsingRecommendCompanies'],
      }),
  });

  const handleSubmit = () => {
    if (!logoImgUrl && !ableSubmit) {
      return;
    }

    addCompanyMutation.mutate({
      companyName: companyName.value,
      emailAddress: emailAddress.value,
      logoImgUrl,
    });

    handleResetInputs();
  };

  useEffect(() => {
    setAbleSubmit(
      companyName.value && emailAddress.value && logoImgUrl ? true : false
    );
  }, [companyName.value, emailAddress.value, logoImgUrl]);

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
        <Avatar size="xLarge" src={logoImgUrl || user} />
      </span>
      <Input
        label="회사명"
        placeholder="회사명을 입력하세요."
        value={companyName.value}
        onChange={companyName.onChange}
      />
      <Input
        label="회사 이메일"
        placeholder="회사 이메일을 입력하세요."
        value={emailAddress.value}
        onChange={emailAddress.onChange}
      />
      <div className={style.buttonContainer}>
        <Button
          paddingSize="full"
          fontSize="medium"
          text="추가"
          disabled={!ableSubmit}
          onClick={handleSubmit}
        />
        <Button
          paddingSize="full"
          fontSize="medium"
          text="초기화"
          version="blueInverted"
          onClick={async () => {
            handleResetInputs();
            await deleteFileFromS3(logoImgUrl);
          }}
        />
      </div>
    </div>
  );
};

export default AddCompany;
