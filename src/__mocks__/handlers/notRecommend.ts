import { rest } from 'msw';

export const notRecommendHandlers = [
  rest.post('/creators', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ data: 'notRecommend success' })
    );
  }),
];
