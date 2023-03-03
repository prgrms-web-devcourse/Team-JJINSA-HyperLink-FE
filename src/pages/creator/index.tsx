import { useState } from 'react';
import { Button, Avatar, Heading } from '@/components/common';
import * as style from './style.css';

const FILTER = ['최신순', '인기순'];

const CreatorPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER[0]);

  return (
    <div className={style.wrapper}>
      <div className={style.creator}>
        <div className={style.info}>
          <Avatar src="https://play-lh.googleusercontent.com/Yoaqip2U7E9EKghfvnZW1OeanfbjaL3Qqn5TGVDYAqkbXsL3TDNyEp_oBPH5vAPro38" />
          <div className={style.detail}>
            <div className={style.header}>
              <Heading level={4} style={{ marginRight: '4rem' }}>
                <strong>토스 테크</strong>
              </Heading>
              <span className={style.subscriber}>구독자 92명</span>
            </div>
            <div className={style.description}>
              매일 업데이트되는 요즘 사람들의 IT 이야기
            </div>
          </div>
        </div>
        <Button
          version="blueInverted"
          paddingSize="small"
          isBold={true}
          onClick={() => console.log('구독')}
          text="구독"
        />
      </div>
      <div className={style.filterButtonGroup}>
        {FILTER.map((type, idx) => (
          <Button
            key={idx}
            version={selectedFilter === type ? 'gray' : 'white'}
            isBold={selectedFilter === type ? true : false}
            shape="circle"
            text={type}
            onClick={() => setSelectedFilter(type)}
          />
        ))}
      </div>
      {/* 해당 크리에이터 게시글 카드 리스트 */}
    </div>
  );
};

export default CreatorPage;
