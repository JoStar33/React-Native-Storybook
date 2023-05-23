import MovieCard from "components/molecules/cards/MovieCard/MovieCard";
import MovieScreenSkeleton from "components/organization/skeletons/MovieScreenSkeleton/MovieScreenSkeleton";
import { useMovieQuery } from "hooks/movies/useMovieQuery";
import { FlatList, View } from "react-native";

const MovieScreen = () => {
  const { data, fetchNextPage, isFetching, hasNextPage } = useMovieQuery();
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data?.pages.map((page) => page.movies).flat()}
        onEndReached={() => {
          if(hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        keyExtractor={(item, index) => String(item.id)}
        ListFooterComponent={isFetching ? <MovieScreenSkeleton/> : undefined}
        renderItem={(movie) => (
          <MovieCard
            key={movie.item.id}
            item={movie.item}
          />
        )}
      />
    </View>
  );
};

export default MovieScreen;
