import { rest } from 'msw';

const RECOMMENDED_CREATORS = {
  creators: [
    {
      creatorId: 1,
      creatorName: '개발바닥1',
      subscriberAmount: 13,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      profileImgUrl:
        'https://play-lh.googleusercontent.com/Yoaqip2U7E9EKghfvnZW1OeanfbjaL3Qqn5TGVDYAqkbXsL3TDNyEp_oBPH5vAPro38',
    },
    {
      creatorId: 2,
      creatorName: '개발바닥2',
      subscriberAmount: 130,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      profileImgUrl:
        'https://play-lh.googleusercontent.com/Yoaqip2U7E9EKghfvnZW1OeanfbjaL3Qqn5TGVDYAqkbXsL3TDNyEp_oBPH5vAPro38',
    },
    {
      creatorId: 3,
      creatorName: '개발바닥3',
      subscriberAmount: 123,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      profileImgUrl:
        'https://play-lh.googleusercontent.com/Yoaqip2U7E9EKghfvnZW1OeanfbjaL3Qqn5TGVDYAqkbXsL3TDNyEp_oBPH5vAPro38',
    },
    {
      creatorId: 4,
      creatorName: '개발바닥4',
      subscriberAmount: 313,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      profileImgUrl:
        'https://play-lh.googleusercontent.com/Yoaqip2U7E9EKghfvnZW1OeanfbjaL3Qqn5TGVDYAqkbXsL3TDNyEp_oBPH5vAPro38',
    },
  ],
};

export const recommendedCreatorsHandler = [
  rest.get('/creators/recommend', (req, res, ctx) => {
    console.log(RECOMMENDED_CREATORS);
    if (!req.headers.all().authorization) {
      return res(ctx.status(401));
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(RECOMMENDED_CREATORS)
    );
  }),
];
