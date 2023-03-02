import { useState } from 'react';
import * as style from './style.css';

type CategoryButtonProps = {
  text?: string;
  onClick?: () => void;
  clicked: boolean;
};

const CategoryButton = ({ text, onClick, clicked }: CategoryButtonProps) => {
  const [isClicked, setIsClicked] = useState(clicked);

  return (
    <button
      className={style.button({
        isClicked,
      })}
      onClick={() => {
        onClick?.();
        setIsClicked(!isClicked);
      }}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
