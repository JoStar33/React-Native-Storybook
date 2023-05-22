// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommonButton from './CommonButton';

export default {
  title: '컴포넌트/아톰/버튼/CommonButton',
  component: CommonButton,
} as ComponentMeta<typeof CommonButton>;

export const CommonButtonTest: ComponentStory<typeof CommonButton> = args => (
  <CommonButton {...args}/>
);

CommonButtonTest.args = {
  label: "테스트입니다."
}

