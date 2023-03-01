import { silentRefresh } from '@/api/auth';
import { atom, selector } from 'recoil';

const isAuthorizedSelector = selector({
  key: 'isAuthorizedSelector',
  get: async () => {
    return (await silentRefresh()) ? true : false;
  },
});

export const isAuthorizedState = atom<boolean>({
  key: 'isAuthorized',
  default: isAuthorizedSelector,
});
