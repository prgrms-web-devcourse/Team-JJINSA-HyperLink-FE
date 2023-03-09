import { rest } from 'msw';

export const myAttentionCategory = {
  attentionCategory: ['develop', 'beauty', 'finance'],
};

export const attentionCategoryHandler = [
  rest.get('/attention-category', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    return res(
      ctx.status(200),
      ctx.json(myAttentionCategory.attentionCategory)
    );
  }),

  rest.put('/attention-category/update', async (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    const { attentionCategory } = await req.json();
    myAttentionCategory.attentionCategory = attentionCategory;

    return res(ctx.status(200), ctx.json(myAttentionCategory));
  }),
];
