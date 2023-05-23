import RowMovieCardSkeleton from "components/molecules/skeletons/cards/RowMovieCardSkeleton/RowMovieCardSkeleton";
import { View } from "react-native";
import { movieRowListScreenSkeletonStyles } from "./MovieRowListScreenSkeleton.style";

const MovieRowListScreenSkeleton = () => {
  return (
    <View style={movieRowListScreenSkeletonStyles.container}>
      {new Array(2).fill(1).map((_, index) => (
        <RowMovieCardSkeleton key={index} />
      ))}
    </View>
  );
};

export default MovieRowListScreenSkeleton;