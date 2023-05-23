import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { movieCardSkeletonStyles } from './MovieCardSkeleton.style';

const MovieCardSkeleton = () => {
  return (
    <View style={movieCardSkeletonStyles.container}>
      <SkeletonPlaceholder borderRadius={10}>
        <View>
          <View style={movieCardSkeletonStyles.image}></View>
          <View style={movieCardSkeletonStyles.title}></View>
          <View style={movieCardSkeletonStyles.description}></View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default MovieCardSkeleton;