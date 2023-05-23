// stories/CommonInput.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CommonInput from "./CommonInput";

export default {
  title: "컴포넌트/아톰/인풋/CommonInput",
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>;

export const CommonInputTest: ComponentStory<typeof CommonInput> = () => (
  <CommonInput />
);
