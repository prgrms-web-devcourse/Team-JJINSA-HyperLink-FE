import { rest } from 'msw';
import { data } from '../data';

export const subscriptionContentsHandlers = [
  rest.get('/subscriptions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(data));
  }),
];
