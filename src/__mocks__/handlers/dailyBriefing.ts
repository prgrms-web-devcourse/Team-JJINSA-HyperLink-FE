import { rest } from 'msw';

const DAILY_BRIEFING = {
  standardTime: '2023-02-17 18',
  dailyBriefing: {
    memberStatistics: {
      increase: 300,
      totalCount: 12400,
    },
    viewStatistics: {
      increase: 1540,
      totalCount: 54920,
    },
    viewByCategories: [
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
    contentIncreaseForWeek: [
      {
        date: '2023-03-01',
        contentIncrease: 44,
      },
      {
        date: '2023-03-02',
        contentIncrease: 23,
      },
      {
        date: '2023-03-03',
        contentIncrease: 63,
      },
      {
        date: '2023-03-04',
        contentIncrease: 29,
      },
      {
        date: '2023-03-05',
        contentIncrease: 16,
      },
      {
        date: '2023-03-06',
        contentIncrease: 45,
      },
      {
        date: '2023-03-07',
        contentIncrease: 55,
      },
    ],
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
