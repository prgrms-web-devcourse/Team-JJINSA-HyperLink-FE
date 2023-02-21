import * as style from './style.css';

export type BadgeProps = {
  isText: boolean;
};

// header AlramIcon badge, 알람 모달 badge / 데일리 브리핑 new badge
const Badge = ({ isText }: BadgeProps) => {
  return (
    <div className={style.badgeContainer}>
      <div
        className={style.badge(
          isText
            ? {
                size: 'text',
                borderRadius: 'text',
                display: 'flex',
              }
            : {
                size: 'circle',
                borderRadius: 'circle',
              }
        )}
      >
        {isText && 'new'}
      </div>
    </div>
  );
};

export default Badge;
