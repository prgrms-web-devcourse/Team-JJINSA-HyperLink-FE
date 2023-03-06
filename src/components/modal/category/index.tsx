import {
  getAttentionCategory,
  putAttentionCategory,
} from '@/api/attentionCategory';
import { Button, Icon, Modal, Spinner, Text } from '@/components/common';
import { CATEGORIES } from '@/utils/constants/signup';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as style from './style.css';

export type CategryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CategryModal = ({ isOpen, onClose }: CategryModalProps) => {
  const { data: selectedList, isLoading } = useQuery(
    ['attention-category'],
    getAttentionCategory
  );

  const [newSelectedList, setNewSelectedList] = useState(new Set());

  const handleSelect = (category: string) => {
    const selectedCategorySet = new Set(newSelectedList);
    const englishCategory = CATEGORIES[category];

    if (newSelectedList.has(englishCategory))
      selectedCategorySet.delete(englishCategory);
    else selectedCategorySet.add(englishCategory);

    setNewSelectedList(selectedCategorySet);
  };

  const handleSubmit = async () => {
    if (Array.isArray(newSelectedList)) {
      const response = await putAttentionCategory([...newSelectedList]);
      if (response?.status === 200) {
        alert('변경되었습니다!');
        onClose();
      } else {
        alert('잠시후 다시 시도해주세요');
        if (Array.isArray(selectedList)) {
          setNewSelectedList(new Set([...selectedList]));
        }
      }
    }
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
          {!isLoading ? (
            Object.keys(CATEGORIES).map((category) => {
              const isSelected = newSelectedList.has(CATEGORIES[category]);
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
            })
          ) : (
            <div style={{ margin: '5rem' }}>
              <Spinner size="huge" />
            </div>
          )}
        </div>
        <div className={style.buttonWrapper}>
          <Button
            text="완료"
            isBold
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CategryModal;
