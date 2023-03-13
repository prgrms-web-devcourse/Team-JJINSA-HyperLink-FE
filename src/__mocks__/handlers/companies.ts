import { rest } from 'msw';

const CAMPANIES = {
  companyEmail: 'rldnd2637@kakao.co.kr',
  authNumber: '123456',
};

export const companiesHandler = [
  rest.post('/companies/auth', async (req, res, ctx) => {
    const { companyEmail } = await req.json();

    if (!companyEmail) {
      return res(ctx.status(400));
    }

    CAMPANIES.companyEmail = companyEmail;

    return res(
      ctx.status(200),
      ctx.json({
        authNumber: CAMPANIES.authNumber,
      })
    );
  }),

  rest.post('/companies/verification', async (req, res, ctx) => {
    const { companyEmail, authNumber } = await req.json();

    if (!companyEmail || !authNumber) {
      return res(ctx.status(400));
    }

    if (authNumber !== CAMPANIES.authNumber) {
      return res(
        ctx.status(403),
        ctx.json({
          message: '인증 코드가 유효하지 않습니다.',
        })
      );
    }

    return res(ctx.status(200));
  }),
];
