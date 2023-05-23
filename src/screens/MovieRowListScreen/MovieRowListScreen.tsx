import RowMovieCard from "components/molecules/cards/RowMovieCard/RowMovieCard";
import MovieRowListScreenSkeleton from "components/organization/skeletons/MovieRowListScreenSkeleton/MovieRowListScreenSkeleton";
import { useMovieQuery } from "hooks/movies/useMovieQuery";
import { FlatList, View } from "react-native";
import { movieDetailScreenStyles } from "./MovieRowListScreen.style";

const MovieRowListScreen = () => {
  const { data, fetchNextPage, isFetching, hasNextPage } = useMovieQuery();
  return (
    <View style={movieDetailScreenStyles.container}>
      <FlatList
        numColumns={1}
        data={data?.pages.map((page) => page.movies).flat()}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        keyExtractor={(item, index) => String(item.id)}
        ListFooterComponent={isFetching ? <MovieRowListScreenSkeleton /> : undefined}
        renderItem={(movie) => (
          <RowMovieCard key={movie.item.id * 2} item={movie.item} />
        )}
      />
    </View>
  );
};

export default MovieRowListScreen;