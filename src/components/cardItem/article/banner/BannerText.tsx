import { useState, useEffect } from 'react';
import * as style from './BannerText.css';
import { companyProps } from '@/components/cardItem/article';

const BannerText = ({ companies }: { companies: companyProps[] }) => {
  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCompany((currentCompany + 1) % companies.length);
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
