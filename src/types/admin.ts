export type pagination = {
  currentPage: number;
  totalPage: number;
};

export type creator = {
  creatorId: number;
  name: string;
  profileImgUrl?: string;
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

type view = {
  categoryName: 'develop' | 'beauty' | 'finance';
  views: number;
};

export type views = {
  oneDayView: view[];
  createdDate: string;
};
