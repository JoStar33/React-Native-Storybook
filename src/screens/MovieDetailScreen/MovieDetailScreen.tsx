import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Movie } from "types/movie";
import { movieDetailScreenStyles } from "./MovieDetailScreen.style";

type ParamList = {
  movieType: {
    movie: Movie;
  };
};

const MovieDetailScreen = () => {
  const { params } = useRoute<RouteProp<ParamList, "movieType">>();
  return (
    <View style={movieDetailScreenStyles.container}>
      <Image
        style={movieDetailScreenStyles.image}
        source={{ uri: params.movie.medium_cover_image }}
      />
      <Text>{params.movie.description_full}</Text>
    </View>
  );
};

export default MovieDetailScreen;
