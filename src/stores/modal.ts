import { atom } from 'recoil';

export const isLoginModalVisibleState = atom<boolean>({
  key: 'isLoginModalVisible',
  default: false,
});

export const isUserInfoModalVisibleState = atom<boolean>({
  key: 'isUserDropDownModalVisible',
  default: false,
});
