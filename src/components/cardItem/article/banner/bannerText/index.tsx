import { useState, useEffect } from 'react';
import { companyProps } from '@/components/cardItem/article';
import favicon from '@/assets/facivon.ico';
import * as style from './style.css';

const BannerText = ({ companies }: { companies?: companyProps[] }) => {
  if (!companies) {
    companies = [{ companyName: '아직 사람들이', companyLogoImgUrl: favicon }];
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

  const companyClasses = Array.from({ length: companies.length }, (_, index) =>
    index === currentCompany ? style.activeFlipText : style.previousFlipText
  );

  return (
    <div className={style.flipAnimationContainer}>
      {companies.map((company, index) => (
        <div
          key={index}
          className={`${style.flipText} ${companyClasses[index]}`}
        >
          <div>
            <div className={`${style.companyName} ${companyClasses[index]}`}>
              {company.companyName}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerText;