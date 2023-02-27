import { Button, Divider, Heading, Text } from '@/components/common';
import * as variants from '@/styles/variants.css';
import { useEffect, useState } from 'react';
import * as style from './style.css';

export type CategoryInfoProps = {
  selectedCategories: string[];
  onCategoryClick: (item: string) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const CATEGORIES = ['개발', '경제, 금융', '패션, 뷰티'];

const CategoryInfo = ({
  selectedCategories,
  onCategoryClick,
  onPrevClick,
  onNextClick,
}: CategoryInfoProps) => {
  const [ableSubmit, setAbleSubmit] = useState(false);

  useEffect(() => {
    setAbleSubmit(selectedCategories.length ? true : false);
  }, [selectedCategories]);

  return (
    <div>
      <Heading level={4}>관심 카테고리를 선택해 주세요.</Heading>
      <Text size="small" color={variants.vars.color.font.secondary}>
        최소 1개 이상 카테고리를 선택해 주세요.
      </Text>
      <Divider />
      <form className={style.form}>
        <div className={style.categoryContainer}>
          {CATEGORIES.map((category) => {
            return (
              <Button
                key={category}
                version={
                  selectedCategories.find(
                    (selectedCategory) => selectedCategory === category
                  )
                    ? 'blue'
                    : 'grayInverted'
                }
                fontSize="medium"
                paddingSize="small"
                text={category}
                onClick={() => onCategoryClick(category)}
              />
            );
          })}
        </div>
        <div className={style.buttonContainer}>
          <Button
            version="blueInverted"
            fontSize="medium"
            paddingSize="small"
            text="이전"
            onClick={onPrevClick}
            style={{ width: '10rem' }}
          />
          <Button
            fontSize="medium"
            paddingSize="full"
            text="회원 가입 완료"
            disabled={!ableSubmit}
            onClick={onNextClick}
          />
        </div>
      </form>
    </div>
  );
};

export default CategoryInfo;
