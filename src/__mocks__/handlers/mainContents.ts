import { rest } from 'msw';
import { data } from '../data';

export const mainContentsHandlers = [
  rest.get('/contents', (req, res, ctx) => {
    const page = req.url.searchParams.get('page'),
      sort = req.url.searchParams.get('sort'),
      category = req.url.searchParams.get('category');

    if (!page || !sort || !category) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.delay(500), ctx.json(data));
  }),
];
