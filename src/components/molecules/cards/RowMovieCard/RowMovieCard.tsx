import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackMenus } from "constants/menus";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Movie } from 'types/movie';
import { rowMovieCardStyles } from "./RowMovieCard.style";
interface Props {
  item: Movie;
}

type RootParamList = {
  MovieDetailScreen: { movie: Movie } | undefined;
};

const RowMovieCard = ({item}: Props) => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleClick = () => {
    navigation.navigate(StackMenus.MovieDetailScreen, {
      movie: item
    });
  };
  return (
    <TouchableOpacity style={rowMovieCardStyles.container} onPress={handleClick}>
      <View style={rowMovieCardStyles.imageContainer}>
        <Image style={rowMovieCardStyles.image} source={{ uri: item.medium_cover_image }} />
        <Text style={rowMovieCardStyles.title}>{item.title}</Text>
      </View>
      <Text style={rowMovieCardStyles.description}>{item.description_full}</Text>
    </TouchableOpacity>
  );
};

export default RowMovieCard;