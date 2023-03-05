import { Icon, Modal, Tab, Text } from '@/components/common';
import { alarmItem } from '@/types/alarmItem';
import { useReducer } from 'react';
import AlarmItem from './alarmItem';
import * as style from './style.css';

export type AlarmModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TAB_LIST = ['전체', '안 읽은 알림', '읽은 알림'];

const reducer = (items: alarmItem[], action: { type: string }) => {
  switch (action.type) {
    case '전체':
      // 전체 데이터 가져오는 로직
      return items;
    case '안 읽은 알림':
      // 안 읽은 데이터 가져오는 로직
      return items;
    case '읽은 알림':
      // 읽은 데이터 가져오는 로직
      return items;
  }
  return items;
};

const AlarmModal = ({ isOpen, onClose }: AlarmModalProps) => {
  const [items, dispatch] = useReducer(reducer, []);

  return (
    <Modal type="icon" isOpen={isOpen} onClose={onClose}>
      <div className={style.modalContent}>
        <div className={style.headerWrapper}>
          <div className={style.modalHeader}>
            <Text block weight={800} size="large">
              알림
            </Text>
            <div onClick={onClose}>
              <Icon size="large" />
            </div>
          </div>
          <Tab
            items={TAB_LIST}
            onClick={(item) => {
              dispatch({ type: item });
            }}
          />
        </div>
        <div className={style.cardList}>
          {items.map(
            ({
              contentId,
              contentImgUrl,
              creatorName,
              title,
              createdAt,
              link,
            }: alarmItem) => (
              <AlarmItem
                key={contentId}
                contentImgUrl={contentImgUrl}
                creatorName={creatorName}
                title={title}
                createdAt={createdAt}
                link={link}
              />
            )
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AlarmModal;
