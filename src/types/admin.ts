export type pagination = {
  currentPage: number;
  totalPage: number;
};

export type creator = {
  creatorId: number;
  name: string;
  profileImgUrl: string;
  description: string;
  categoryName: 'develop' | 'beauty' | 'finance';
};

export type creators = {
  creators: creator[];
} & pagination;

export type content = {
  contentId: number;
  link: string;
  title: string;
};

export type contents = {
  contents: content[];
} & pagination;

export type company = {
  companyId: number;
  companyName: string;
};

export type companies = {
  companies: company[];
} & pagination;

type view = {
  categoryName: 'develop' | 'beauty' | 'finance';
  viewCount: number;
};

type onedayViews = {
  results: view[];
  date: string;
};

export type weeklyViews = {
  weeklyViewCounts: onedayViews[];
  createdDate: string;
};
