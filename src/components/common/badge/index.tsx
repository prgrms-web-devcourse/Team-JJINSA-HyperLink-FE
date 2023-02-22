import * as style from './style.css';

export type BadgeProps = {
  hasText: boolean;
};

// header AlramIcon badge, 알람 모달 badge / 데일리 브리핑 new badge
const Badge = ({ hasText }: BadgeProps) => {
  return (
    <div className={style.badgeContainer}>
      <div
        className={style.badge(
          hasText
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
        {hasText && 'new'}
      </div>
    </div>
  );
};

export default Badge;
