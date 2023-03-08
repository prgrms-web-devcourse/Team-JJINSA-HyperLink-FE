import { rest } from 'msw';

const DAILY_BRIEFING1 = {
  standardTime: '2023-02-17 18',
  dailyBriefing: {
    memberIncrease: 534,
    viewIncrease: 1540,
    viewByCategorys: [
      {
        categoryName: 'develop',
        count: 283,
        ranking: 3,
      },
      {
        categoryName: 'beauty',
        count: 832,
        ranking: 1,
      },
      {
        categoryName: 'finance',
        count: 425,
        ranking: 2,
      },
    ],
    contentIncrease: 45,
    memberCountByAttentionCategorys: [
      {
        categoryName: 'develop',
        count: 13,
        ranking: 3,
      },
      {
        categoryName: 'beauty',
        count: 92,
        ranking: 1,
      },
      {
        categoryName: 'finance',
        count: 55,
        ranking: 2,
      },
    ],
  },
};

const DAILY_BRIEFING2 = {
  standardTime: '2023-02-17 19',
  dailyBriefing: {
    memberIncrease: 840,
    viewIncrease: 1220,
    viewByCategorys: [
      {
        categoryName: 'develop',
        count: 283,
        ranking: 3,
      },
      {
        categoryName: 'beauty',
        count: 832,
        ranking: 1,
      },
      {
        categoryName: 'finance',
        count: 425,
        ranking: 2,
      },
    ],
    contentIncrease: 45,
    memberCountByAttentionCategorys: [
      {
        categoryName: 'develop',
        count: 13,
        ranking: 3,
      },
      {
        categoryName: 'beauty',
        count: 92,
        ranking: 1,
      },
      {
        categoryName: 'finance',
        count: 55,
        ranking: 2,
      },
    ],
  },
};

export const dailyBriefingDataHandler = [
  rest.get('/daily-briefing', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(DAILY_BRIEFING2));
  }),
];
