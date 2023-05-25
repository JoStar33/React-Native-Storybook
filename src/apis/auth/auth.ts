import { LOGIN } from "constants/apiUrls";
import { customAxios } from "../axios/customAxios";

const login = (email: string, password: string) => {
  return customAxios.post(LOGIN, {
    email: email,
    password: password
  });
};


export { login };

