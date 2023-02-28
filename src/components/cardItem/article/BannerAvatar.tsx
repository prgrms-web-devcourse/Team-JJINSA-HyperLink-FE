import { Avatar } from '@/components/common';
import { useState, useEffect } from 'react';
import { companyProps } from '.';
import * as style from './BannerAvatar.css';

const BannerAvatar = ({ companies }: { companies: companyProps[] }) => {
  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCompany((currentCompany + 1) % companies.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentCompany]);

  const companyClasses = Array.from({ length: companies.length }, (_, index) =>
    index === currentCompany ? style.activeFlipImage : style.previousFlipImage
  );

  return (
    <div className={style.flipAnimationContainer}>
      {companies.map((company, index) => (
        <div
          key={index}
          className={`${style.flipImage} ${companyClasses[index]}`}
        >
          <Avatar src={company.companyLogoImgUrl} size="small" shape="circle" />
        </div>
      ))}
    </div>
  );
};

export default BannerAvatar;
