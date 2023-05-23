import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieScreenSkeleton from './MovieScreenSkeleton';

export default {
  title: '컴포넌트/조직/스켈레톤/카드/MovieScreenSkeleton',
  component: MovieScreenSkeleton,
} as ComponentMeta<typeof MovieScreenSkeleton>;

export const MovieScreenSkeletonTest: ComponentStory<typeof MovieScreenSkeleton> = () => (
  <MovieScreenSkeleton/>
);