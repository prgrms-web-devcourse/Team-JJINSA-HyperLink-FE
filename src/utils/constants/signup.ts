export const STEPS = ['기본 정보', '직군 / 경력', '관심 카테고리'];

export const CATEGORIES: { [key: string]: string } = {
  개발: 'develop',
  '패션, 뷰티': 'beauty',
  '경제, 금융': 'finance',
};

export const JOBS: { [key: string]: string } = {
  개발: 'develop',
  '패션, 뷰티': 'beauty',
  '경제, 금융': 'finance',
  기타: 'etc',
};

export const CAREERS: { [key: string]: string } = {
  '1년 미만': 'lessThanOne',
  '1년': 'one',
  '2년': 'two',
  '3년': 'three',
  '4년': 'four',
  '5년': 'five',
  '6년': 'six',
  '7년': 'seven',
  '8년': 'eight',
  '9년': 'nine',
  '10년': 'ten',
  '10년 이상': 'moreThanTen',
};

export const REVERSE_CAREERS: { [key: string]: string } = Object.entries(
  CAREERS
).reduce((acc: { [key: string]: string }, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

export const GENDERS: { [key: string]: string } = { 남: 'man', 여: 'woman' };

export const BIRTH_YEARS = Array.from({ length: 100 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);
