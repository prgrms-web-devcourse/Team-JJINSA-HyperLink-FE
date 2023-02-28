export type content = {
  contentId: number;
} & contentData;

export type contentData = {
  contentImgUrl: string;
  createdAt: string;
  creator: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likeCount: number;
  link: string;
  title: string;
  viewCount: number;
  recommendationCompanies?: company[];
};

export type company = {
  companyLogoImgUrl: string;
  companyName: string;
};

export type contents = {
  contents: content[];
  hasNext: boolean;
  keyword: string;
  resultCount: number;
};
