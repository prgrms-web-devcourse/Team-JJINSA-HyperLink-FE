import { rest } from 'msw';

export const viewHandlers = [
  rest.patch('/contents', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({ data: 'view success' })
    );
  }),
];
