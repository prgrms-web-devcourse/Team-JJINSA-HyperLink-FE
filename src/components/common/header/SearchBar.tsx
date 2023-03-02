import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/common';

export type SearchBarProps = {
  version?: 'header' | 'banner';
  onEnterPress?: () => void;
};

const SearchBar = ({ version = 'header', onEnterPress }: SearchBarProps) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const inputStyle = {
    margin: version === 'header' ? '0 1rem' : '0',
  };

  const handleValueChange = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleEnterPress = async () => {
    if (!keyword.trim().length) {
      alert('한 글자 이상 검색해주세요!');
      return;
    }
    onEnterPress?.();
    navigate(`/search/${keyword}`);
  };

  return (
    <Input
      style={inputStyle}
      version={version}
      type="text"
      placeholder="키워드를 검색하세요."
      value={keyword}
      onChange={handleValueChange}
      onEnterPress={handleEnterPress}
    />
  );
};

export default SearchBar;
