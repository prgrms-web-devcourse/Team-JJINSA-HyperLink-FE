import * as style from './style.css';

import { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  type: 'creater' | 'article';
};

const Card = ({ children, type }: CardProps) => {
  return <div className={style.CardWrapper({ type })}>{children}</div>;
};

export default Card;
