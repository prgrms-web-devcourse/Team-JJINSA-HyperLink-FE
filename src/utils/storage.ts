const storage = window.localStorage;

export const getItem = (key: string, initialValue: unknown = '') => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

export const setItem = (key: string, value: unknown) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeItem = (key: string) => {
  try {
    storage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
