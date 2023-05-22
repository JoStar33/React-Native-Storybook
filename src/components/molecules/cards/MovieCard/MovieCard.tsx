import { Image, Text, TouchableOpacity } from 'react-native';
import { Movie } from 'types/movie';
import { movieCardStyles } from './MovieCard.style';

interface Props {
  item: Movie;
}

const MovieCard = ({item}: Props) => {
  return (
    <TouchableOpacity style={movieCardStyles.container}>
      <Image style={movieCardStyles.image} source={{uri: item.medium_cover_image}}/>
      <Text style={movieCardStyles.title}>{item.title}</Text>
      <Text style={movieCardStyles.description}>{item.description_full}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;