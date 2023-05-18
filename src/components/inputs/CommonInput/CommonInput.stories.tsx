// stories/CommonInput.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommonInput from './CommonInput';

export default {
  title: 'components/CommonInput',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>;

export const Basic: ComponentStory<typeof CommonInput> = () => (
  <CommonInput />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
