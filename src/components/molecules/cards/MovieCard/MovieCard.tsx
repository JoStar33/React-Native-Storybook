import { Image, Text, View } from 'react-native';
import { movieCardStyles } from './MovieCard.style';

interface Props {
  title: string;
  description: string;
  image: string;
}

const MovieCard = ({title, description, image}: Props) => {
  return (
    <View style={movieCardStyles.container}>
      <Image style={movieCardStyles.image} source={{uri: image}}/>
      <Text style={movieCardStyles.title}>{title}</Text>
      <Text style={movieCardStyles.description}>{description}</Text>
    </View>
  );
};

export default MovieCard;