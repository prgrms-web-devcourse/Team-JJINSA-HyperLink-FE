import * as style from './style.css';

export type DividerProps = {
  type?: 'horizontal' | 'vertical';
};

const Divider = ({ type = 'horizontal' }: DividerProps) => {
  return <hr className={style.divider({ type })} />;
};

export default Divider;
