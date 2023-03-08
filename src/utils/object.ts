export const getKeyByValue = (obj: { [key: string]: string }, value: string) =>
  Object.keys(obj).find((key) => obj[key] === value);
