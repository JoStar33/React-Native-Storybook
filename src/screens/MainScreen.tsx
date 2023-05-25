import MultiValidateForm from "components/molecules/forms/MultiValidateForm/MultiValidateForm";
import { useLoginMutation } from "hooks/auth/useLoginMutation";
import { View } from "react-native";
import { SubmitValue } from "types/apps/form";
import { validateEmail, validatePassword } from "utils/validate";

const MainScreen = () => {
  const { mutate } = useLoginMutation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MultiValidateForm
        formModel={[
          {
            type: "text",
            name: "email",
            label: "이메일",
            required: {
              value: true,
              message: "이메일을 입력해주세요!",
            },
            validate: (value: string) =>
              validateEmail(value) ||
              "이메일 형식에 맞지않습니다. 다시 입력해주세요.",
          },
          {
            type: "password",
            name: "password",
            label: "패스워드",
            required: {
              value: true,
              message: "비밀번호를 입력해주세요!",
            },
            validate: (value: string) =>
              validatePassword(value) ||
              "비밀번호는 특수문자, 영문 대소문자, 숫자가 포함된 9자~16자로 입력해주세요.",
          },
        ]}
        actionSubmit={(data: SubmitValue) => {
          mutate({
            email: data.email,
            password: data.password
          });
        }}
        buttonText={"로그인"}
      />
    </View>
  );
};

export default MainScreen;
