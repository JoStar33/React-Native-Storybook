import { MovieCardContainer, MovieDescription, MovieImage, MovieTitle } from "./MovieCard.style";

interface Props {
  title: string;
  description: string;
  image: string;
}

const MovieCard = ({title, description, image}: Props) => {
  return (
    <MovieCardContainer>
      <MovieImage source={{uri: image}}/>
      <MovieTitle>{title}</MovieTitle>
      <MovieDescription>{description}</MovieDescription>
    </MovieCardContainer>
  );
};

export default MovieCard;