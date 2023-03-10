import { rest } from 'msw';

export const subscribeHandlers = [
  rest.get('/creators', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({ isSubscribed: true })
    );
  }),
];
