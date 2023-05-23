import { ComponentMeta, ComponentStory } from "@storybook/react";
import RowMovieCardSkeleton from "./RowMovieCardSkeleton";

export default {
  title: "컴포넌트/분자/스켈레톤/카드/RowMovieCardSkeleton",
  component: RowMovieCardSkeleton,
} as ComponentMeta<typeof RowMovieCardSkeleton>;

export const RowMovieCardSkeletonTest: ComponentStory<
  typeof RowMovieCardSkeleton
> = () => <RowMovieCardSkeleton />;
