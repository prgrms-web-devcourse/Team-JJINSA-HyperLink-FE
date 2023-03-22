import { rest } from 'msw';

export const notRecommendHandlers = [
  rest.post('/creators/:creatorId/not-recommend', (req, res, ctx) => {
    const { creatorId } = req.params;

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!creatorId) {
      return res(ctx.status(400));
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ data: 'notRecommend success' })
    );
  }),
];
