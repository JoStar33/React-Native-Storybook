import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackMenus } from "constants/menus";
import { Image, Text, TouchableOpacity } from "react-native";
import { Movie } from "types/movie";
import { movieCardStyles } from "./MovieCard.style";

interface Props {
  item: Movie;
}

type RootParamList = {
  MovieDetailScreen: { movie: Movie } | undefined;
};

const MovieCard = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleClick = () => {
    navigation.navigate(StackMenus.MovieDetailScreen, {
      movie: item
    });
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
