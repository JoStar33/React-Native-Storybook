// stories/CommonInput.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommonInput from './CommonInput';

export default {
  title: 'components/CommonInput',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>;

export const CommonInputTest: ComponentStory<typeof CommonInput> = () => (
  <CommonInput />
);
