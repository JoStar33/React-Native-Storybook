// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import IconButton from "./IconButton";

export default {
  title: "컴포넌트/아톰/버튼/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const IconButtonTest: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

IconButtonTest.args = {
  color: "black",
  iconName: "rocket",
  label: "테스트 버튼",
  handleClick: () => {},
};
