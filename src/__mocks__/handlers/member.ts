import { rest } from 'msw';

export const myInfo = {
  email: 'rldnd5555@gmail.com',
  nickname: '초보자',
  career: 'develop',
  careerYear: '10',
  profileUrl:
    'https://lh3.googleusercontent.com/a/AEdFTp6KQBBQ-S4iulsmKXKrkDCYJlMQATyZKXT-zg1Z',
};

export const memberHandlers = [
  rest.get('/members/mypage', (req, res, ctx) => {
    if (!req.headers.all().authorization) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.json(myInfo));
  }),
];
