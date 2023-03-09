import { rest } from 'msw';

export const CREATOR = {
  creatorId: 1,
  creatorName: '개발바닥',
  subscriberAmount: 13,
  creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
  isSubscribed: true,
  profileImgUrl:
    'https://play-lh.googleusercontent.com/Yoaqip2U7E9EKghfvnZW1OeanfbjaL3Qqn5TGVDYAqkbXsL3TDNyEp_oBPH5vAPro38',
};

export const creatorInfoHandler = [
  rest.get('/creators/:creatorId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(CREATOR));
  }),
];
