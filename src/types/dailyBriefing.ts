export type dataByCategorys = {
  categoryName: 'develop' | 'beauty' | 'finance';
  count: number;
  ranking: number;
};

export type contentIncreaseData = {
  date: string;
  contentIncrease: number;
};

export type statistic = {
  increase: number;
  totalCount: number;
};

export type dailyBriefing = {
  standardTime: string;
  dailyBriefing: {
    contentIncreaseForWeek: contentIncreaseData[];
    memberCountByAttentionCategories: dataByCategorys[];
    viewByCategories: dataByCategorys[];
    viewStatistics: statistic;
    memberStatistics: statistic;
  };
};
