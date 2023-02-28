import { DUMMY } from '@/__mocks__/Dummy';
import { rest } from 'msw';

const cards = DUMMY;

export const cardlist = [
  rest.get('/cardlist', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cards));
  }),
];
