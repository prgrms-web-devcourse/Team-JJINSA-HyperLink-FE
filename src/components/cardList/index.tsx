import { ReactNode } from 'react';
import * as style from './style.css';

const CardList = ({
  type,
  children,
}: {
  type: 'creator' | 'content';
  children: ReactNode;
}) => {
  return <div className={style.listContainer({ type: type })}>{children}</div>;
};

export default CardList;
