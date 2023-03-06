import { atom } from 'recoil';

export const mainTabState = atom<string>({
  key: 'tab',
  default: 'RECENT_CONTENT',
});
