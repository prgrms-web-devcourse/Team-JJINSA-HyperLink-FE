import { rest } from 'msw';

export const myAttentionCategory = {
  category: ['develop', 'beauty', 'finance'],
};

export const attentionCategoryHandler = [
  rest.get('/attention-category', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.json(myAttentionCategory.category));
  }),

  rest.put('/attention-category/update', async (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    const { attentionCategory } = await req.json();
    myAttentionCategory.category = attentionCategory;

    return res(ctx.status(200), ctx.json(myAttentionCategory));
  }),
];
