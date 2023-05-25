import { login } from "apis/auth/auth";
import { AxiosError } from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";
import { LoginForm } from "types/auth";
import { Context } from "utils/Context";

export const useLoginMutation = () => {
  const { setDialog, setSuccessDialog } = useContext(Context);
  return useMutation((loginInfo: LoginForm) => login(loginInfo.email, loginInfo.password), {
    onSuccess: () => {
      setSuccessDialog("로그인에 성공하셨습니다!", true);
    },
    onError: (error: AxiosError) => {
      setDialog(error.message, true);
    },
  });
};
