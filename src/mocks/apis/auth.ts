import { LOGIN } from "constants/apiUrls";
import { rest } from "msw";

export const authMock = () => {
  return [
    rest.post(`${process.env.REACT_APP_JOSTAR_URL}${LOGIN}`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: 3333,
          email: "user12@test.com",
          nick: "클라나이"
        })
      );
    }),
  ];
};