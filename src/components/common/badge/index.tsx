import * as style from './style.css';

export type BadgeProps = {
  text: boolean;
};

// header AlramIcon badge, 알람 모달 badge / 데일리 브리핑 new badge
const Badge = ({ text }: BadgeProps) => {
  return text ? (
    <div
      className={style.badge({
        size: 'text',
        borderRadius: 'text',
        display: 'flex',
      })}
    >
      new
    </div>
  ) : (
    <div
      className={style.badge({
        size: 'circle',
        borderRadius: 'circle',
      })}
    />
  );
};

export default Badge;
