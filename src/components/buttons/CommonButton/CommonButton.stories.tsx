// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommonButton from './CommonButton';

export default {
  title: 'components/CommonButton',
  component: CommonButton,
} as ComponentMeta<typeof CommonButton>;

export const CommonButtonTest: ComponentStory<typeof CommonButton> = args => (
  <CommonButton {...args}/>
);

CommonButtonTest.args = {
  label: "테스트입니다."
}

