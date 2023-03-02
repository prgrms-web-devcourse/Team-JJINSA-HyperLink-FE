import { atom } from 'recoil';

export const isHomeScrolledState = atom<boolean>({
  key: 'isHomeScrolled',
  default: false,
});
