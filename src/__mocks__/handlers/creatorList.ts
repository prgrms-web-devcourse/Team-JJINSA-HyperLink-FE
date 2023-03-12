import { rest } from 'msw';

const creatorListData = {
  creators: [
    {
      creatorId: 1,
      creatorName: '카카오',
      subscriberAmount: 13,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      isSubscribed: true,
      profileImgUrl: 'https://avatars.githubusercontent.com/u/60571418?v=4',
    },
    {
      creatorId: 2,
      creatorName: '프로그래머스',
      subscriberAmount: 13,
      creatorDescription:
        '개발에 대한 모든 지식을 공유합니다.개발에 대한 모든 지식을 공유합니다.개발에 대한 모든 지식을 공유합니다.개발에 대한 모든 지식을 공유합니다.',
      isSubscribed: false,
      profileImgUrl:
        'https://avatars.githubusercontent.com/u/88082564?s=100&v=4',
    },
    {
      creatorId: 3,
      creatorName: '벨로퍼트',
      subscriberAmount: 13,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      isSubscribed: false,
      profileImgUrl:
        'https://avatars.githubusercontent.com/u/17202261?s=100&v=4',
    },
    {
      creatorId: 4,
      creatorName: '원티드',
      subscriberAmount: 13,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      isSubscribed: false,
      profileImgUrl:
        'https://avatars.githubusercontent.com/u/100328104?s=200&v=4',
    },
    {
      creatorId: 5,
      creatorName: '개발바닥',
      subscriberAmount: 13,
      creatorDescription: '개발에 대한 모든 지식을 공유합니다.',
      isSubscribed: false,
      profileImgUrl: '/favicon.ico',
    },
  ],
  hasNext: true,
};

export const creatorListHandler = [
  rest.get('/creators', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(creatorListData));
  }),
];
