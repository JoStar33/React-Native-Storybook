import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieCardSkeleton from './MovieCardSkeleton';

export default {
  title: '컴포넌트/분자/스켈레톤/카드/MovieCardSkeleton',
  component: MovieCardSkeleton,
} as ComponentMeta<typeof MovieCardSkeleton>;

export const MovieCardSkeletonTest: ComponentStory<typeof MovieCardSkeleton> = () => (
  <MovieCardSkeleton/>
);