import { movieAxios } from "apis/axios/customAxios";
import { GET_MOVIE_BY_PAGE_NUMBER } from "constants/apiUrls";
import { GettedMovieData } from "types/movie";

const getMoviesByPage = (page: number) => {
  return movieAxios.get(GET_MOVIE_BY_PAGE_NUMBER(page))
  .then((res) => res.data.data)
  .then((data: GettedMovieData) => data);
};

export { getMoviesByPage };

