// stories/MultiForm.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SubmitValue } from "types/apps/form";
import MultiForm from "./MultiForm";

export default {
  title: "컴포넌트/분자/폼/MultiForm",
  component: MultiForm,
} as ComponentMeta<typeof MultiForm>;

export const MultiFormTest: ComponentStory<typeof MultiForm> = (
  args
) => <MultiForm {...args} />;

MultiFormTest.args = {
  formModel: [
    {
      type: "text",
      name: "email",
      label: "이메일"
    },
    {
      type: "password",
      name: "password",
      label: "패스워드"
    },
    {
      type: "text",
      name: "name",
      label: "성명"
    },
  ],
  actionSubmit: (data: SubmitValue) => {
    console.log(data);
    alert(JSON.stringify(data));
  },
  buttonText: "등록",
};
