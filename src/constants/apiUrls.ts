const BASE_URL = "/api";

export const GET_MOVIE_BY_PAGE_NUMBER = (page: number) =>
  `${BASE_URL}/v2/list_movies.json?page=${page}`;
