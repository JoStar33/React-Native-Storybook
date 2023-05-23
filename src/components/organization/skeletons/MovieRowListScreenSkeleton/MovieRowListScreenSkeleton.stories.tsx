import { ComponentMeta, ComponentStory } from "@storybook/react";
import MovieRowListScreenSkeleton from "./MovieRowListScreenSkeleton";

export default {
  title: "컴포넌트/조직/스켈레톤/카드/MovieRowListScreenSkeleton",
  component: MovieRowListScreenSkeleton,
} as ComponentMeta<typeof MovieRowListScreenSkeleton>;

export const MovieRowListScreenSkeletonTest: ComponentStory<
  typeof MovieRowListScreenSkeleton
> = () => <MovieRowListScreenSkeleton />;
