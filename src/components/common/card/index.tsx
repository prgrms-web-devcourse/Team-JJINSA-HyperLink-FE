import { CSSProperties, ReactNode } from 'react';
import * as variants from '@/styles/variants.css';
import * as style from './style.css';

export type CardProps = {
  children: ReactNode;
  type: 'default' | 'creator' | 'content';
  color?: string;
  style?: CSSProperties;
};

const Card = ({
  children,
  type,
  color = variants.color.white,
  ...props
}: CardProps) => {
  return (
    <div
      className={style.CardWrapper({ type })}
      style={{ background: color, ...props.style }}
    >
      {children}
    </div>
  );
};

export default Card;
