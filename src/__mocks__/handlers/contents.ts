import { rest } from 'msw';

const SEARCH_RESULT = {
  contents: [
    {
      contentId: 13,
      title: '개발자의 삶',
      creator: '슈카',
      contentImgUrl: 'https://via.placeholder.com/200',
      link: 'https://okky.kr/articles/503803',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
      ],
    },
    {
      contentId: 14,
      title: '개발을 잘하는 방법',
      creator: '슈카',
      contentImgUrl: 'https://via.placeholder.com/200',
      link: 'https://okky.kr/articles/50323',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
      ],
    },
    {
      contentId: 15,
      title: '일 잘하는 개발자',
      creator: '슈카',
      contentImgUrl: 'https://via.placeholder.com/200',
      link: 'https://okky.kr/articles/234',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
      ],
    },
    {
      contentId: 16,
      title: '사용하기 편한 개발툴 소개',
      creator: '슈카',
      contentImgUrl: 'https://via.placeholder.com/200',
      link: 'https://branch/articles/453',
      likeCount: 4,
      viewCount: 100,
      isBookmarked: false,
      isLiked: false,
      createdAt: '2023-02-17T12:30.334',
      recommendationCompanies: [
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
        {
          companyName: '네이버',
          companyLogoImgUrl:
            'https://avatars.githubusercontent.com/u/60571418?v=4',
        },
      ],
    },
  ],
  hasNext: true,
  keyword: '개발',
  resultCount: 10,
};

export const contentsHandlers = [
  rest.get(`/contents/search`, (req, res, ctx) => {
    const keyword = req.url.searchParams.get('keyword');
    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('page');

    if (!keyword || !page || !size) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.delay(2000), ctx.json(SEARCH_RESULT));
  }),
];
