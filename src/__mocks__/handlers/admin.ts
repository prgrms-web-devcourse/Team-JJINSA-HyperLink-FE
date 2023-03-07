import { rest } from 'msw';

let creators = [
  {
    creatorId: 1,
    name: '크리에이터 1',
    description: '크리에이터 1에 대한 설명입니다.',
    categoryName: 'develop',
  },
  {
    creatorId: 2,
    name: '크리에이터 2',
    description: '크리에이터 2에 대한 설명입니다.',
    categoryName: 'beauty',
  },
];

let contents = [
  {
    contentId: 1,
    link: 'www.google.com',
    title: '컨텐츠 1',
  },
  {
    contentId: 2,
    link: 'www.google.com',
    title: '컨텐츠 2',
  },
];

const views = {
  oneDayView: [
    {
      categoryName: 'develop',
      views: 25632,
    },
    {
      categoryName: 'beauty',
      views: 22333,
    },
  ],
  createdDate: '2023-03-06T00:00:00',
};

const categories = ['develop', 'beauty', 'finance'];

export const adminHandlers = [
  rest.get('/admin/creators', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.delay(1000), ctx.json(creators));
  }),

  rest.post('/admin/creators', async (req, res, ctx) => {
    const { name, profileImgUrl, description, categoryName } = await req.json();

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!name || !description || !categoryName) {
      return res(ctx.status(400));
    } else if (!categories.some((category) => category === categoryName)) {
      return res(ctx.status(404));
    }

    const createdCreator = {
      creatorId: Math.random(),
      name,
      profileImgUrl,
      description,
      categoryName,
    };

    creators.push(createdCreator);

    return res(ctx.status(200), ctx.delay(1000), ctx.json(creators));
  }),

  rest.delete('admin/creators/:creatorId', (req, res, ctx) => {
    const { creatorId } = req.params;

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (
      !creators.some(
        (creator) => creator.creatorId === parseInt(creatorId as string, 10)
      )
    ) {
      return res(ctx.status(404));
    }

    creators = creators.filter(
      (creator) => creator.creatorId !== parseInt(creatorId as string, 10)
    );

    return res(ctx.status(200), ctx.delay(1000), ctx.json(creators));
  }),

  rest.get('/admin/contents', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.delay(1000), ctx.json(contents));
  }),

  rest.post('/admin/contents/:contentId/activate', (req, res, ctx) => {
    const { contentId } = req.params;

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (
      !contents.some(
        (content) => content.contentId === parseInt(contentId as string, 10)
      )
    ) {
      return res(ctx.status(404));
    }

    contents = contents.filter(
      (content) => content.contentId !== parseInt(contentId as string, 10)
    );

    return res(ctx.status(200), ctx.delay(1000), ctx.json(contents));
  }),

  rest.delete('/admin/contents/:contentId', (req, res, ctx) => {
    const { contentId } = req.params;

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (
      !contents.some(
        (content) => content.contentId === parseInt(contentId as string, 10)
      )
    ) {
      return res(ctx.status(404));
    }

    contents = contents.filter(
      (content) => content.contentId !== parseInt(contentId as string, 10)
    );

    return res(ctx.status(200), ctx.delay(1000), ctx.json(contents));
  }),

  rest.get('/admin/dashboard/all-category/view', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.delay(1000), ctx.json(views));
  }),
];
