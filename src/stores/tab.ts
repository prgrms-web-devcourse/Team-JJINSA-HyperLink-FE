import { atom } from 'recoil';

export const selectedTabState = atom<string>({
  key: 'selectedTab',
  default: 'RECENT_CONTENT',
});
