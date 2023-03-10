import { rest } from 'msw';

export const myInfo = {
  email: 'rldnd5555@gmail.com',
  nickname: '초보자',
  career: 'develop',
  careerYear: 'ten',
  profileUrl:
    'https://lh3.googleusercontent.com/a/AEdFTp6KQBBQ-S4iulsmKXKrkDCYJlMQATyZKXT-zg1Z',
  companyName: 'kakao',
};

export const memberHandlers = [
  rest.get('/members/mypage', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.json(myInfo));
  }),

  rest.put('/members/profile-image', async (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    const { profileUrl } = await req.json();
    myInfo.profileUrl = profileUrl;

    return res(ctx.status(200), ctx.json(myInfo));
  }),
];
