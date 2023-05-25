import { authMock } from "./apis/auth";

export const handlers = [
  ...authMock()
]