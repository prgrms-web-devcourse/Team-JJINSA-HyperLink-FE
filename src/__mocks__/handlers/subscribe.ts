import { rest } from 'msw';

export const subscribeHandlers = [
  rest.get('/creators/:creatorId/subscribe', (req, res, ctx) => {
    const { creatorId } = req.params;

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!creatorId) {
      return res(ctx.status(400));
    }

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({ isSubscribed: true })
    );
  }),
];
