import { Button, Dropdown, Input } from '@/components/common';
import useInput from '@/hooks/useInput';
import { CATEGORIES } from '@/utils/constants/signup';
import { useEffect, useState } from 'react';
import * as style from './style.css';

const AddCreator = () => {
  const [ableSubmit, setAbleSubmit] = useState(false);

  const name = useInput('');
  const description = useInput('');
  const categoryName = useInput('');

  const handleResetInputs = () => {
    name.onChange('');
    description.onChange('');
    categoryName.onChange('');
  };

  useEffect(() => {
    setAbleSubmit(
      name.value && description.value && categoryName.value ? true : false
    );
  }, [name.value, description.value, categoryName.value]);

  return (
    <div className={style.container}>
      <Input
        label="이름"
        placeholder="이름을 입력하세요."
        value={name.value}
        onChange={name.onChange}
      />
      <Input
        label="설명"
        placeholder="설명을 입력하세요."
        value={description.value}
        onChange={description.onChange}
      />
      <Dropdown
        label="카테고리"
        placeholder="카테고리를 선택하세요."
        items={Object.keys(CATEGORIES)}
        value={categoryName.value}
        onItemClick={categoryName.onChange}
      />
      <div className={style.buttonContainer}>
        <Button
          paddingSize="full"
          fontSize="medium"
          text="추가"
          disabled={!ableSubmit}
        />
        <Button
          paddingSize="full"
          fontSize="medium"
          text="초기화"
          version="blueInverted"
          onClick={handleResetInputs}
        />
      </div>
    </div>
  );
};

export default AddCreator;
