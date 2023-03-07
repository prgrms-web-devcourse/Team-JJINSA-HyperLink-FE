import { rest } from 'msw';

const HISTORY_DATA = {
  contents: [
    {
      contentId: 13,
      title: '개발자의 삶',
      creatorName: '슈카',
      contentImgUrl: 'https://img1.com',
      link: 'https://okky.kr/articles/503803',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
      ],
    },
    {
      contentId: 14,
      title: '개발을 잘하는 방법',
      creatorName: '슈카',
      contentImgUrl: 'https://img2.com',
      link: 'https://okky.kr/articles/50323',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
      ],
    },
    {
      contentId: 15,
      title: '일 잘하는 개발자',
      creatorName: '슈카',
      contentImgUrl: 'https://img3.com',
      link: 'https://okky.kr/articles/234',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
      ],
    },
    {
      contentId: 16,
      title: '사용하기 편한 개발툴 소개',
      creatorName: '슈카',
      contentImgUrl: 'https://img4.com',
      link: 'https://branch/articles/453',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl: 'https://imglogo.com',
        },
      ],
    },
  ],
  hasNext: true,
};

export const historyHandler = [
  rest.get('/history', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('page');

    if (!page || !size) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.delay(500), ctx.json(HISTORY_DATA));
  }),
];
