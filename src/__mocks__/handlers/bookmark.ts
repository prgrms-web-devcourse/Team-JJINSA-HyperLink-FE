import { rest } from 'msw';

export const bookmarkHandlers = [
  rest.post('/bookmark/:contentId', (req, res, ctx) => {
    const { contentId } = req.params;
    const isBookmarked = req.url.searchParams.get('type');

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!contentId || !isBookmarked) {
      return res(ctx.status(400));
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ type: isBookmarked })
    );
  }),
];
