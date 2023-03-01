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
  '1년 미만': 'less1',
  '1년': '1',
  '2년': '2',
  '3년': '3',
  '4년': '4',
  '5년': '5',
  '6년': '6',
  '7년': '7',
  '8년': '8',
  '9년': '9',
  '10년': '10',
  '10년 이상': 'more10',
};

export const GENDERS: { [key: string]: string } = { 남: 'man', 여: 'woman' };

export const BIRTH_YEARS = Array.from({ length: 100 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);
