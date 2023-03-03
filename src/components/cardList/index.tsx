import { ReactNode } from 'react';
import * as style from './style.css';

const CardList = ({ children }: { children: ReactNode }) => {
  return <div className={style.listContainer}>{children}</div>;
};

export default CardList;
