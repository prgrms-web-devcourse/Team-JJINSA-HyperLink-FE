import { rest } from 'msw';

const CAMPANIES = {
  companyEmail: 'rldnd2637@kakao.co.kr',
  verification: '123456',
  logoImgUrl: 'www.s3.com',
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
        verification: CAMPANIES.verification,
      })
    );
  }),

  rest.post('/companies/verification', async (req, res, ctx) => {
    const { companyEmail, verification, logoImgUrl } = await req.json();

    if (!companyEmail || !verification || !logoImgUrl) {
      return res(ctx.status(400));
    }

    if (verification !== CAMPANIES.verification) {
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
