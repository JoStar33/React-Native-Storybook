import { ComponentMeta, ComponentStory } from '@storybook/react';

import RowMovieCard from './RowMovieCard';

export default {
  title: '컴포넌트/분자/카드/RowMovieCard',
  component: RowMovieCard,
} as ComponentMeta<typeof RowMovieCard>;

export const RowMovieCardTest: ComponentStory<typeof RowMovieCard> = args => (
  <RowMovieCard {...args}/>
);

RowMovieCardTest.args = {
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