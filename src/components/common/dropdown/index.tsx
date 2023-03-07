import { Icon, Text } from '@/components/common';
import useDropdown from '@/hooks/useDropdown';
import * as variants from '@/styles/variants.css';
import { useEffect, useState } from 'react';
import * as style from './style.css';

export type DropdownProps = {
  placeholder?: string;
  value: string;
  items: string[];
  label?: string;
  onItemClick: (item: string) => void;
};

const Dropdown = ({
  placeholder,
  value,
  items,
  label,
  onItemClick,
}: DropdownProps) => {
  const { isVisible, ref, handleVisibility } = useDropdown();
  const [chosenItem, setChosenItem] = useState(value);

  const handleItemClick = (item: string) => {
    onItemClick(item);
    handleVisibility();
  };

  useEffect(() => {
    setChosenItem(value);
  }, [value]);

  return (
    <div
      className={style.dropdownContainer({ hasLabel: label ? true : false })}
    >
      {label && <Text className={style.label}>{label}</Text>}
      <div
        className={style.dropdown({ isChosen: value !== '' })}
        onClick={handleVisibility}
        ref={ref}
      >
        {value ? (
          <>
            <span className={style.text}>{value}</span>
            <Icon name="check" color={variants.color.primary} />
          </>
        ) : (
          <>
            <span className={style.text}>{placeholder}</span>
            <Icon name="chevron-down" />
          </>
        )}
      </div>
      <article className={style.dropdownWrapper({ isVisible })}>
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
                  <Icon name="check" color={variants.color.font.primary} />
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
