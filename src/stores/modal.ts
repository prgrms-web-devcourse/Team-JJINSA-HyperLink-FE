import { atom } from 'recoil';

export const isLoginModalVisibleState = atom<boolean>({
  key: 'isLoginModalVisible',
  default: false,
});
