import { Button, Icon, Modal, Text } from '@/components/common';
import { useState } from 'react';
import * as style from './style.css';

export type CategryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  categoryList: string[];
  selectedList: string[];
  setSelectedList: (categoryList: Array<string>) => void;
};

const CategryModal = ({
  isOpen,
  onClose,
  categoryList,
  selectedList,
  setSelectedList,
}: CategryModalProps) => {
  const [newSelectedList, setNewSelectedList] = useState(
    new Set([...selectedList])
  );

  const handleSelect = (category: string) => {
    const selectedCategorySet = new Set(newSelectedList);
    if (newSelectedList.has(category)) selectedCategorySet.delete(category);
    else selectedCategorySet.add(category);

    setNewSelectedList(selectedCategorySet);
  };

  const handleSubmit = () => {
    setSelectedList([...newSelectedList]);
  };

  return (
    <Modal type="icon" isOpen={isOpen} onClose={onClose}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <Text block weight={800} size="xLarge">
            관심 카테고리 선택
          </Text>
          <div onClick={onClose}>
            <Icon size="xLarge" />
          </div>
        </div>
        <div className={style.modalSelectWrapper}>
          {categoryList.map((category, i) => {
            const isSelected = newSelectedList.has(category);
            return (
              <Button
                key={category}
                version={isSelected ? 'blue' : 'grayInverted'}
                fontSize="medium"
                paddingSize="small"
                text={category}
                onClick={() => handleSelect(category)}
              />
            );
          })}
        </div>
        <div className={style.buttonWrapper}>
          <Button
            text="완료"
            isBold
            onClick={() => {
              handleSubmit();
              onClose();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CategryModal;
