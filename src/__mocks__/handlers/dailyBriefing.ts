import { rest } from 'msw';

const DAILY_BRIEFING = {
  standardTime: '2023-02-26 19',
  dailyBriefing: {
    memberIncrease: 255,
    viewIncrease: 34,
    viewByCategories: [
      {
        categoryName: 'develop',
        count: 283,
        ranking: 3,
      },
      {
        categoryName: 'beauty',
        count: 1832,
        ranking: 1,
      },
      {
        categoryName: 'finance',
        count: 425,
        ranking: 2,
      },
    ],
    contentIncrease: 160,
    memberCountByAttentionCategories: [
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
    return res(ctx.status(200), ctx.delay(500), ctx.json(DAILY_BRIEFING));
  }),
];
