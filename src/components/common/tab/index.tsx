import { CSSProperties, useState } from 'react';
import * as style from './index.css';

export type TabProps = {
  items: string[];
  type?: 'header' | 'modal';
  onClick: (item: string) => void;
  style?: CSSProperties;
};

const Tab = ({ items, type = 'header', onClick, ...props }: TabProps) => {
  const [clickedItem, setClickedItem] = useState(items[0]);

  const handleClick = (item: string) => {
    setClickedItem(item);
    onClick(item);
  };

  return (
    <ul
      className={style.tabList({ type })}
      style={{ ...props.style }}
      {...props}
    >
      {items.map((item) => {
        return (
          <li
            className={style.tabItem({
              type,
              isClicked: clickedItem === item,
            })}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
