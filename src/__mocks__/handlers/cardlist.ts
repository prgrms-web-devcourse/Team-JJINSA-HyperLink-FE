import { DUMMY as cards } from '@/__mocks__/Dummy';
import { rest } from 'msw';

export const cardlistHandlers = [
  rest.get('/contents', (req, res, ctx) => {
    console.log('res', res);
    return res(ctx.status(200), ctx.delay(1000), ctx.json(cards));
  }),
];
