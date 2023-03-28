import { rest } from 'msw';

export const likeHandlers = [
  rest.post('/like', async (req, res, ctx) => {
    const { contentId } = req.params;
    const { addLike } = await req.json();

    if (!contentId) {
      return res(ctx.status(400));
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ addLike: addLike })
    );
  }),
];
