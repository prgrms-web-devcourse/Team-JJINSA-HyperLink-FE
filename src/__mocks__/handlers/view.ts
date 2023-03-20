import { rest } from 'msw';

export const viewHandlers = [
  rest.patch('/contents/:contentId/view', (req, res, ctx) => {
    const { contentId } = req.params;
    const viewType = req.url.searchParams.get('search');
    if (!contentId || !viewType) {
      return res(ctx.status(400));
    }

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({ data: 'view success' })
    );
  }),
];
