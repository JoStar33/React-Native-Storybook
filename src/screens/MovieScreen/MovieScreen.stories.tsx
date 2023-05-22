// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MovieScreen from './MovieScreen';

export default {
  title: '스크린/MovieScreen',
  component: MovieScreen,
} as ComponentMeta<typeof MovieScreen>;

export const MovieScreenTest: ComponentStory<typeof MovieScreen> = () => (
  <MovieScreen/>
);