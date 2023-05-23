import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { rowMovieCardSkeletonStyles } from "./RowMovieCardSkeleton.style";


const RowMovieCardSkeleton = () => {
  return (
    <View style={rowMovieCardSkeletonStyles.container}>
      <SkeletonPlaceholder borderRadius={10}>
        <View style={rowMovieCardSkeletonStyles.skeletonContainer}>
          <View style={rowMovieCardSkeletonStyles.imageContainer}>
            <View style={rowMovieCardSkeletonStyles.image} />
            <View style={rowMovieCardSkeletonStyles.title}/>
          </View>
          <View style={rowMovieCardSkeletonStyles.description}/>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default RowMovieCardSkeleton;