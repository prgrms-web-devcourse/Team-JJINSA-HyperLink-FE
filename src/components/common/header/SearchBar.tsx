import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../input';

const SearchBar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const inputStyle = {
    margin: '0 1rem',
  };

  const handleValueChange = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleEnterPress = async () => {
    if (!keyword.length) {
      alert('한 글자 이상 검색해주세요!');
      return;
    }
    navigate(`/search/${keyword}`);
  };

  return (
    <Input
      style={inputStyle}
      version="header"
      type="text"
      placeholder="키워드를 검색하세요."
      value={keyword}
      onChange={handleValueChange}
      onEnterPress={handleEnterPress}
    />
  );
};

export default SearchBar;
