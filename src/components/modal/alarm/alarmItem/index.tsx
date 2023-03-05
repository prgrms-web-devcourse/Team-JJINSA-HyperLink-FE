import { Avatar, Text } from '@/components/common';
import { alarmItem } from '@/types/alarmItem';
import { Link } from 'react-router-dom';
import * as style from './style.css';

const AlarmItem = ({
  contentImgUrl,
  creatorName,
  title,
  createdAt,
  link,
}: alarmItem) => {
  const handleDate = (createdAt: string) => {
    const createDate = new Date(createdAt).getTime();
    const elapsedTime = Date.now() - createDate;

    const elapsedMinute = Math.floor(elapsedTime / 1000 / 60);
    const elapsedHour = Math.floor(elapsedMinute / 60);
    const elapsedDay = Math.floor(elapsedHour / 24);

    if (elapsedDay > 0) return `${elapsedDay}일`;
    else if (elapsedHour > 0) return `${elapsedHour}시간`;
    else return `${elapsedMinute}분`;
  };

  return (
    <Link to={{ pathname: `${link}` }} target="_blank">
      <div className={style.wrapper}>
        {!true && <div className={style.circle}></div>}
        <div className={style.cardContent}>
          <Avatar src={contentImgUrl} shape="circle" size="small" />
          <div className={style.textWrapper}>
            <Text block>
              <strong>{creatorName}</strong>님의 새 글<strong>'{title}'</strong>
              이 추가되었습니다.
            </Text>
            <Text block size="xSmall" color="#A5ACB8">
              {handleDate(createdAt)} 전
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlarmItem;
