import { CSSProperties, ReactNode } from 'react';
import * as style from './style.css';

export type BadgeProps = {
  children: ReactNode;
  hasText: boolean;
  style?: CSSProperties;
};

// header AlramIcon badge, 알람 모달 badge / 데일리 브리핑 new badge
const Badge = ({ hasText, children, ...props }: BadgeProps) => {
  let badge = null;
  if (hasText) {
    badge = <sup className={style.Super({ type: 'text' })}>new</sup>;
  } else {
    badge = <sup className={style.Super({ type: 'dot' })} />;
  }
  return (
    <div className={style.badgeContainer} style={{ ...props.style }}>
      {children}
      {badge}
    </div>
  );
};

export default Badge;
