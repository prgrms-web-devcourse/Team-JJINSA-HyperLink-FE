export type dataByCategorys = {
  categoryName: 'develop' | 'beauty' | 'finance';
  count: number;
  ranking: number;
};

export type dailyBriefing = {
  standardTime: string;
  dailyBriefing: {
    memberIncrease: number;
    viewIncrease: number;
    contentIncrease: number;
    viewByCategories: dataByCategorys[];
    memberCountByAttentionCategories: dataByCategorys[];
  };
};
