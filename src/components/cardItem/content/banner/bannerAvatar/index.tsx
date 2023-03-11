import { Avatar } from '@/components/common';
import { useState, useEffect } from 'react';
import * as style from './style.css';
import favicon from '/favicon.ico';
import { banner } from '@/types/contents';

const BannerAvatar = ({ companies }: { companies?: banner[] }) => {
  if (companies?.length === 0) {
    companies = [{ bannerName: '아직 사람들이', bannerLogoImgUrl: favicon }];
  }
  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCompany(
        (currentCompany + 1) % (!companies ? 1 : companies.length)
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentCompany]);

  const companyClasses = Array.from(
    { length: companies?.length as number },
    (_, index) =>
      index === currentCompany ? style.activeFlipImage : style.previousFlipImage
  );

  return (
    <div className={style.flipAnimationContainer}>
      {companies?.map((company, index) => (
        <div
          key={index}
          className={`${style.flipImage} ${companyClasses[index]}`}
        >
          <Avatar src={company.bannerLogoImgUrl} size="small" shape="circle" />
        </div>
      ))}
    </div>
  );
};

export default BannerAvatar;
