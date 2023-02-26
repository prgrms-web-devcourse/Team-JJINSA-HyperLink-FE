import { useState } from 'react';
import Input from '../input';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const inputStyle = {
    margin: '0 1rem',
  };

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  const handleEnterPress = () => {
    // 엔터를 눌렀을 때
  };

  return (
    <Input
      style={inputStyle}
      version="header"
      type="text"
      placeholder="키워드를 검색하세요."
      value={value}
      onChange={handleValueChange}
      onEnterPress={handleEnterPress}
    />
  );
};

export default SearchBar;
