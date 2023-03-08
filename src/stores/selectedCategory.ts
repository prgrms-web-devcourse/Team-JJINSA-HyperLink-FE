import { atom } from 'recoil';

export const selectedCategoryState = atom<string>({
  key: 'category',
  default: 'all',
});

export const selectedFilterHistoryPageState = atom<string>({
  key: 'selectedFilterHistoryPage',
  default: 'bookmark',
});
