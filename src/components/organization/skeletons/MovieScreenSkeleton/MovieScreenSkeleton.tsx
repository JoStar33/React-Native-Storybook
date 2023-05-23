import MovieCardSkeleton from 'components/molecules/skeletons/cards/MovieCardSkeleton/MovieCardSkeleton';
import { View } from 'react-native';
import { movieScreenSkeletonStyles } from './MovieScreenSkeleton.style';

const MovieScreenSkeleton = () => {
  return (
    <View style={movieScreenSkeletonStyles.container}>
      {
        new Array(3)
          .fill(1)
          .map((_, index) => <MovieCardSkeleton key={index}/>)
      }
      <MovieCardSkeleton/>
    </View>
  );
};

export default MovieScreenSkeleton;