import { rest } from 'msw';

const TIME_ZONE = 9 * 60 * 60 * 1000;

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
  {
    creatorId: 3,
    name: '크리에이터 3',
    description: '크리에이터 3에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 4,
    name: '크리에이터 4',
    description: '크리에이터 4에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 5,
    name: '크리에이터 5',
    description: '크리에이터 5에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 6,
    name: '크리에이터 6',
    description: '크리에이터 6에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 7,
    name: '크리에이터 7',
    description: '크리에이터 7에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 8,
    name: '크리에이터 8',
    description: '크리에이터 8에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 9,
    name: '크리에이터 9',
    description: '크리에이터 9에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 10,
    name: '크리에이터 10',
    description: '크리에이터 10에 대한 설명입니다.',
    categoryName: 'finance',
  },
  {
    creatorId: 11,
    name: '크리에이터 11',
    description: '크리에이터 11에 대한 설명입니다.',
    categoryName: 'finance',
  },
];

let currentPageCreators = [];

let contents = [
  {
    contentId: 1,
    link: 'https://www.google.com',
    title: '컨텐츠 1',
  },
  {
    contentId: 2,
    link: 'https://www.google.com/very_long_url',
    title: '컨텐츠 2',
  },
];

let currentPageContents = [];

const today = new Date();

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
    {
      categoryName: 'finance',
      views: 20323,
    },
  ],
  createdDate: new Date(today.setDate(today.getDate() - 1) + TIME_ZONE)
    .toISOString()
    .slice(0, -5),
};

const categories = ['develop', 'beauty', 'finance'];

export const adminHandlers = [
  rest.get('/admin/creators', (req, res, ctx) => {
    const page = req.url.searchParams.get('page'),
      size = req.url.searchParams.get('size');

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!page || !size) {
      return res(ctx.status(400));
    }

    currentPageCreators = creators.slice(
      parseInt(page, 10) * parseInt(size, 10),
      (parseInt(page, 10) + 1) * parseInt(size, 10)
    );

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        creators: currentPageCreators,
        currentPage: parseInt(page, 10) + 1,
        totalPage: Math.ceil(creators.length / parseInt(size, 10)),
      })
    );
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
    const page = req.url.searchParams.get('page'),
      size = req.url.searchParams.get('size');

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!page || !size) {
      return res(ctx.status(400));
    }

    currentPageContents = contents.slice(
      parseInt(page, 10) * parseInt(size, 10),
      (parseInt(page, 10) + 1) * parseInt(size, 10)
    );

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        contents: currentPageContents,
        currentPage: parseInt(page, 10) + 1,
        totalPage: Math.ceil(contents.length / parseInt(size, 10)),
      })
    );
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
