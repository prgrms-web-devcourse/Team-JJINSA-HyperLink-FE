import { Icon } from '@/components/common';
import useDropdown from '@/hooks/useDropdown';
import * as variants from '@/styles/variants.css';
import { useState } from 'react';
import * as style from './style.css';

export type DropdownProps = {
  placeholder: string;
  value: string;
  items: string[];
  onItemClick: (item: string) => void;
};

const Dropdown = ({
  placeholder,
  value,
  items,
  onItemClick,
}: DropdownProps) => {
  const { visible, ref, handleVisibility } = useDropdown();
  const [chosenItem, setChosenItem] = useState('');

  const handleItemClick = (item: string) => {
    onItemClick(item);
    setChosenItem(item);
    handleVisibility();
  };

  return (
    <div className={style.dropdownContainer}>
      <div
        className={style.dropdown({ isChosen: value !== '' })}
        onClick={handleVisibility}
        ref={ref}
      >
        {value ? (
          <>
            <span className={style.text}>{value}</span>
            <Icon name="check" color={variants.vars.color.primary} />
          </>
        ) : (
          <>
            <span className={style.text}>{placeholder}</span>
            <Icon name="chevron-down" />
          </>
        )}
      </div>
      <article className={style.dropdownWrapper({ visible })}>
        <ul className={style.dropdownList}>
          {items.map((item) => {
            return (
              <li
                key={item}
                className={style.dropdownItem({
                  isClicked: chosenItem === item,
                })}
                onClick={() => handleItemClick(item)}
              >
                <span className={style.text}>{item}</span>
                {chosenItem === item && (
                  <Icon name="check" color={variants.vars.color.font.primary} />
                )}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default Dropdown;
