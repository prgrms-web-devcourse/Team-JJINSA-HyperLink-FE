import { atom } from 'recoil';

export const lastTabState = atom<string>({
  key: 'lastTab',
  default: 'none',
});
