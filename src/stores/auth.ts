import { silentRefresh } from '@/api/auth';
import { atom, DefaultValue, selector } from 'recoil';

const authState = atom({
  key: 'auth',
  default: (async () => {
    const response = await silentRefresh();

    return {
      isAuthorized: response?.accessToken ? true : false,
      isAdmin: response?.admin ? true : false,
    };
  })(),
});

export const isAuthorizedState = selector({
  key: 'isAuthorized',
  get: ({ get }) => get(authState).isAuthorized,
  set: ({ set, get }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      set(authState, {
        ...get(authState),
        isAuthorized: newValue,
      });
    }
  },
});

export const isAdminState = selector({
  key: 'isAdmin',
  get: ({ get }) => get(authState).isAdmin,
  set: ({ set, get }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      set(authState, {
        ...get(authState),
        isAdmin: newValue,
      });
    }
  },
});
