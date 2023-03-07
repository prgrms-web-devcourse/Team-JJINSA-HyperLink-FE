export type content = {
  contentId: number;
  creatorId: number;
} & contentData;

export type contentData = {
  contentImgUrl: string;
  createdAt: string;
  creatorName: string;
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
};

export type searchContents = {
  getContentsCommonResponse: contents;
  keyword: string;
  resultCount: number;
};
