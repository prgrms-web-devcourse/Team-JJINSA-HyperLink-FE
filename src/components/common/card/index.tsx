import { ReactNode } from 'react';
import * as style from './style.css';

export type CardProps = {
  children: ReactNode;
  type: 'default' | 'creator' | 'content';
  color?: string;
};

const Card = ({ children, type, color = '#fff' }: CardProps) => {
  return (
    <div className={style.CardWrapper({ type })} style={{ background: color }}>
      {children}
    </div>
  );
};

export default Card;
