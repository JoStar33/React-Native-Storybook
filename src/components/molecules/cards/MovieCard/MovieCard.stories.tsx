import { ComponentMeta, ComponentStory } from '@storybook/react';

import MovieCard from './MovieCard';

export default {
  title: 'components/MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

export const MovieCardTest: ComponentStory<typeof MovieCard> = args => (
  <MovieCard {...args}/>
);

MovieCardTest.args = {
  title: "테스트 텍스트",
  description: "영화 설명입니다.",
  image: "https:\/\/yts.mx\/assets\/images\/movies\/soul_survivors_2001\/medium-cover.jpg"
};