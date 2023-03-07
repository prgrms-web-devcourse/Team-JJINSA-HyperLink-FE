import { rest } from 'msw';

const SEARCH_RESULT = {
  getContentsCommonResponse: {
    contents: [
      {
        contentId: 1,
        creatorId: 1,
        link: 'https://google.com',
        contentImgUrl: 'https://avatars.githubusercontent.com/u/60571418?v=4',
        isBookmarked: false,
        isLiked: false,
        likeCount: 4,
        viewCount: 100,
        creatorName: '요즘 IT',
        createdAt: '2023.02.17',
        title: '개발자의 삶',
        recommendationCompanies: [
          {
            companyName: '카카오',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/60571418?v=4',
          },
          {
            companyName: '프로그래머스',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/88082564?s=100&v=4',
          },
          {
            companyName: '벨로퍼트',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/17202261?s=100&v=4',
          },
          {
            companyName: '원티드',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/100328104?s=200&v=4',
          },
        ],
      },
      {
        contentId: 2,
        creatorId: 2,
        link: 'https://google.com',
        contentImgUrl: 'https://avatars.githubusercontent.com/u/60571418?v=4',
        isBookmarked: false,
        isLiked: false,
        likeCount: 4,
        viewCount: 100,
        creatorName: '요즘 IT',
        createdAt: '2023.02.17',
        title: '2023년도 웹 개발 트렌트',
        // recommendationCompanies: [
        //   {
        //     companyName: '원티드',
        //     companyLogoImgUrl:
        //       'https://avatars.githubusercontent.com/u/100328104?s=200&v=4',
        //   },
        //   {
        //     companyName: '벨로퍼트',
        //     companyLogoImgUrl:
        //       'https://avatars.githubusercontent.com/u/17202261?s=100&v=4',
        //   },
        //   {
        //     companyName: '카카오',
        //     companyLogoImgUrl:
        //       'https://avatars.githubusercontent.com/u/60571418?v=4',
        //   },
        //   {
        //     companyName: '프로그래머스',
        //     companyLogoImgUrl:
        //       'https://avatars.githubusercontent.com/u/88082564?s=100&v=4',
        //   },
        // ],
      },
      {
        contentId: 13,
        title: '개발자의 삶',
        creatorName: '슈카',
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
            companyName: '카카오',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/60571418?v=4',
          },
        ],
      },
      {
        contentId: 14,
        title: '개발을 잘하는 방법',
        creatorName: '슈카',
        contentImgUrl: 'https://via.placeholder.com/200',
        link: 'https://okky.kr/articles/50323',
        likeCount: 4,
        viewCount: 100,
        isBookmarked: false,
        isLiked: false,
        createdAt: '2023-02-17T12:30.334',
        recommendationCompanies: [
          {
            companyName: '프로그래머스',
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
        creatorName: '슈카',
        contentImgUrl: 'https://via.placeholder.com/200',
        link: 'https://okky.kr/articles/234',
        likeCount: 4,
        viewCount: 100,
        isBookmarked: false,
        isLiked: false,
        createdAt: '2023-02-17T12:30.334',
        recommendationCompanies: [
          {
            companyName: '구글',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/60571418?v=4',
          },
          {
            companyName: '메타',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/60571418?v=4',
          },
        ],
      },
      {
        contentId: 16,
        title: '사용하기 편한 개발툴 소개',
        creatorName: '슈카',
        contentImgUrl: 'https://via.placeholder.com/200',
        link: 'https://branch/articles/453',
        likeCount: 4,
        viewCount: 100,
        isBookmarked: false,
        isLiked: false,
        createdAt: '2023-02-17T12:30.334',
        recommendationCompanies: [
          {
            companyName: '그렙',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/60571418?v=4',
          },
          {
            companyName: '모니토',
            companyLogoImgUrl:
              'https://avatars.githubusercontent.com/u/60571418?v=4',
          },
        ],
      },
    ],
    hasNext: true,
  },
  keyword: '개발',
  resultCount: 10,
};

export const searchContentsHandlers = [
  rest.get(`/contents/search`, (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    const keyword = req.url.searchParams.get('keyword');
    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('size');

    if (!keyword || !page || !size) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.delay(2000), ctx.json(SEARCH_RESULT));
  }),
];
