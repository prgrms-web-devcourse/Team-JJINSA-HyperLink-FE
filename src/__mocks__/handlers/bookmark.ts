import { rest } from 'msw';

export const bookmarkHandlers = [
  rest.post('/contents', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ data: 'bookmark success' })
    );
  }),
];
