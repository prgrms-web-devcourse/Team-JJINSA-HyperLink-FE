import { rest } from 'msw';

const TIME_ZONE = 9 * 60 * 60 * 1000;

let creators = [
  {
    creatorId: 1,
    name: '크리에이터 1',
    description: '크리에이터 1에 대한 설명입니다.',
    categoryName: 'develop',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 2,
    name: '크리에이터 2',
    description: '크리에이터 2에 대한 설명입니다.',
    categoryName: 'beauty',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 3,
    name: '크리에이터 3',
    description: '크리에이터 3에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 4,
    name: '크리에이터 4',
    description: '크리에이터 4에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 5,
    name: '크리에이터 5',
    description: '크리에이터 5에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 6,
    name: '크리에이터 6',
    description: '크리에이터 6에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 7,
    name: '크리에이터 7',
    description: '크리에이터 7에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 8,
    name: '크리에이터 8',
    description: '크리에이터 8에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 9,
    name: '크리에이터 9',
    description: '크리에이터 9에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 10,
    name: '크리에이터 10',
    description: '크리에이터 10에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
  },
  {
    creatorId: 11,
    name: '크리에이터 11',
    description: '크리에이터 11에 대한 설명입니다.',
    categoryName: 'finance',
    profileImgUrl:
      'https://hyperlink-data.s3.ap-northeast-2.amazonaws.com/company_logo_image/logo_google.png',
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

let companies = [
  {
    companyId: 11,
    companyName: 'kakao',
  },
  {
    companyId: 13,
    companyName: 'naver',
  },
  {
    companyId: 15,
    companyName: 'daum',
  },
];

let currentPageCompanies = [];

const today = new Date();

const views = {
  weeklyViewCounts: [
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 0,
        },
        {
          categoryName: 'beauty',
          viewCount: 0,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 7) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 0,
        },
        {
          categoryName: 'beauty',
          viewCount: 0,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 6) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 0,
        },
        {
          categoryName: 'beauty',
          viewCount: 0,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 5) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 3,
        },
        {
          categoryName: 'beauty',
          viewCount: 0,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 4) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 37,
        },
        {
          categoryName: 'beauty',
          viewCount: 5,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 3) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 1,
        },
        {
          categoryName: 'beauty',
          viewCount: 0,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 2) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
    {
      results: [
        {
          categoryName: 'develop',
          viewCount: 5,
        },
        {
          categoryName: 'beauty',
          viewCount: 1,
        },
        {
          categoryName: 'finance',
          viewCount: 0,
        },
      ],
      date: new Date(new Date().setDate(today.getDate() - 1) + TIME_ZONE)
        .toISOString()
        .split('T')[0],
    },
  ],
  createdDate: '2023-03-10',
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
      creatorId: Math.random() * 10 ** 17,
      name,
      profileImgUrl,
      description,
      categoryName,
    };

    creators.push(createdCreator);

    return res(ctx.status(200), ctx.delay(1000), ctx.json(creators));
  }),

  rest.delete('/admin/creators/:creatorId', (req, res, ctx) => {
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

  rest.get('/admin/companies', (req, res, ctx) => {
    const page = req.url.searchParams.get('page'),
      size = req.url.searchParams.get('size');

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!page || !size) {
      return res(ctx.status(400));
    }

    currentPageCompanies = companies.slice(
      parseInt(page, 10) * parseInt(size, 10),
      (parseInt(page, 10) + 1) * parseInt(size, 10)
    );

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        companies: currentPageCompanies,
        currentPage: parseInt(page, 10) + 1,
        totalPage: Math.ceil(companies.length / parseInt(size, 10)),
      })
    );
  }),

  rest.patch('/admin/companies/:companyId', async (req, res, ctx) => {
    const { companyId } = req.params;
    const { companyName } = await req.json();

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!companyName || !companyId) {
      return res(ctx.status(400));
    } else if (
      !companies.some(
        (company) => company.companyId === parseInt(companyId as string, 10)
      )
    ) {
      return res(ctx.status(404));
    }

    companies = companies.map((company) =>
      company.companyId !== parseInt(companyId as string, 10)
        ? company
        : { companyId: company.companyId, companyName }
    );

    return res(ctx.status(200), ctx.delay(1000), ctx.json(companies));
  }),

  rest.post('/admin/companies', async (req, res, ctx) => {
    const { companyName, logoImgUrl, emailAddress } = await req.json();

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (!companyName || !logoImgUrl || !emailAddress) {
      return res(ctx.status(400));
    }

    const createdCompany = {
      companyId: Math.random() * 10 ** 17,
      companyName,
    };

    companies.push(createdCompany);

    return res(ctx.status(200), ctx.delay(1000), ctx.json(companies));
  }),

  rest.put('/admin/companies/:companyId', (req, res, ctx) => {
    const { companyId } = req.params;

    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    } else if (
      !companies.some(
        (company) => company.companyId === parseInt(companyId as string, 10)
      )
    ) {
      return res(ctx.status(404));
    }

    companies = companies.filter(
      (company) => company.companyId !== parseInt(companyId as string, 10)
    );

    return res(ctx.status(200), ctx.delay(1000), ctx.json(companies));
  }),

  rest.get('/admin/dashboard/all-category/view', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.delay(1000), ctx.json(views));
  }),
];
