import { rest } from 'msw';

export const likeHandlers = [
  rest.post('/like', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ data: 'like success' })
    );
  }),
];
