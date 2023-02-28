export type recommendationCompany = {
  companyLogoImgUrl: string;
  companyName: string;
};

export type content = {
  contentId: number;
  contentImgUrl: string;
  createdAt: Date;
  creatorName: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likeCount: number;
  link: string;
  title: string;
  viewCount: number;
  recommendationCompanies?: recommendationCompany[];
};

export type contents = {
  contents: content[];
  hasNext: boolean;
  keyword: string;
  resultCount: number;
};
