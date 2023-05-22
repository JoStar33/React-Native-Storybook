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
  item: {
    id: 22,
    url: "",
    imdb_code: "",
    title: "테스트 텍스트",
    title_english: "",
    title_long: "",
    slug: "",
    year: 0,
    rating: 0,
    runtime: 0,
    genres: [],
    summary: "",
    description_full: "영화 설명입니다.",
    synopsis: "",
    yt_trailer_code: "",
    language: "",
    mpa_rating: "",
    background_image: "",
    background_image_original: "",
    small_cover_image: "",
    medium_cover_image: "https:\/\/yts.mx\/assets\/images\/movies\/soul_survivors_2001\/medium-cover.jpg",
    large_cover_image: "",
    state: "",
    torrents: [{}],
    date_uploaded: "",
    date_uploaded_unix: 0,
  }
};