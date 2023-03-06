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
