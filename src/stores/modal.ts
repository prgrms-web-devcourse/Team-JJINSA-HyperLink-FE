import { atom } from 'recoil';

export const isLoginModalVisibleState = atom<boolean>({
  key: 'isLoginModalVisible',
  default: false,
});

export const isMyInfoModalVisibleState = atom<boolean>({
  key: 'isMyInfoModalVisible',
  default: false,
});

export const isAlarmModalVisibleState = atom<boolean>({
  key: 'isAlarmModalVisible',
  default: false,
});
