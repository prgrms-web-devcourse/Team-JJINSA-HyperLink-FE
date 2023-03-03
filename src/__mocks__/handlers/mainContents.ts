import { rest } from 'msw';
import { data } from '../data';

export const mainContentsHandlers = [
  rest.get('/contents', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(data));
  }),
];
