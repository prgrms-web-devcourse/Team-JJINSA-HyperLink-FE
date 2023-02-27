import { CSSProperties } from 'react';
import * as style from './style.css';

export type BadgeProps = {
  text?: string;
  top?: number;
  right?: number;
  style?: CSSProperties;
};

// header AlramIcon badge, 알람 모달 badge / 데일리 브리핑 new badge
const Badge = ({ text = 'new', top = 0, right = 0, ...props }: BadgeProps) => {
  const position = {
    top,
    right,
  };

  return text ? (
    <sup
      className={style.badge({ type: 'text' })}
      style={{ ...position, ...props.style }}
    >
      {text}
    </sup>
  ) : (
    <sup
      className={style.badge({ type: 'dot' })}
      style={{ ...position, ...props.style }}
    />
  );
};

export default Badge;
