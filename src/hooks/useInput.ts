import { useCallback, useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((v: string) => {
    setValue(v);
  }, []);

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
