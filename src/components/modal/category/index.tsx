import {
  getAttentionCategory,
  putAttentionCategory,
} from '@/api/attentionCategory';
import { Button, Icon, Modal, Spinner, Text } from '@/components/common';
import { CATEGORIES } from '@/utils/constants/signup';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import * as style from './style.css';

export type CategryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CategryModal = ({ isOpen, onClose }: CategryModalProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { isLoading } = useQuery(['attentionCategory'], getAttentionCategory, {
    onSuccess: (data) => {
      const selectedList = new Set([...(data || [])]);
      setNewSelectedList(selectedList);
    },
    refetchOnWindowFocus: false,
  });

  const [newSelectedList, setNewSelectedList] = useState(
    new Set([] as string[])
  );

  const { refetch } = useQuery(
    ['updateAttentionCategory'],
    () => putAttentionCategory({ attentionCategory: [...newSelectedList] }),
    { enabled: false }
  );

  const handleSelect = (category: string) => {
    const selectedCategorySet = new Set(newSelectedList);
    const englishCategory = CATEGORIES[category];

    if (newSelectedList.has(englishCategory))
      selectedCategorySet.delete(englishCategory);
    else selectedCategorySet.add(englishCategory);

    setNewSelectedList(selectedCategorySet);
  };

  const handleSubmit = async () => {
    if ([...newSelectedList].length === 0) {
      alert('한 개 이상 선택해주세요!');
      return;
    }

    setIsDisabled(true);
    const response = await refetch();
    setIsDisabled(false);

    if (response.status === 'success') {
      alert('변경되었습니다!');
    } else {
      alert('잠시후 다시 시도해주세요');
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
            disabled={isDisabled}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CategryModal;
