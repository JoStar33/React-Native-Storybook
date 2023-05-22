import { useNavigation } from "@react-navigation/native";
import { Menus } from "constants/menus";
import { Image, Text, TouchableOpacity } from "react-native";
import { Movie } from "types/movie";
import { movieCardStyles } from "./MovieCard.style";

interface Props {
  item: Movie;
}

const MovieCard = ({ item }: Props) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate(Menus.MovieDetailScreen as never, {
      movie: item
    } as never);
  };
  return (
    <TouchableOpacity style={movieCardStyles.container} onPress={handleClick}>
      <Image
        style={movieCardStyles.image}
        source={{ uri: item.medium_cover_image }}
      />
      <Text style={movieCardStyles.title}>{item.title}</Text>
      <Text style={movieCardStyles.description}>{item.description_full}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
