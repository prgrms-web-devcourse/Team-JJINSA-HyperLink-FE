export type creator = {
  creatorId: number;
  name: string;
  profileImgUrl?: string;
  description: string;
  categoryName: 'develop' | 'beauty' | 'finance';
};

export type content = {
  contentId: number;
  link: string;
  title: string;
};

type view = {
  categoryName: 'develop' | 'beauty' | 'finance';
  views: number;
};

export type views = {
  oneDayView: view[];
  createdDate: string;
};
