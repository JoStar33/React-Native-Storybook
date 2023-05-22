import MovieCard from "components/molecules/cards/MovieCard/MovieCard";
import { useMovieQuery } from "hooks/movies/useMovieQuery";
import { ActivityIndicator, FlatList, View } from "react-native";

const MovieScreen = () => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useMovieQuery();
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
        ListFooterComponent={isLoading ? <ActivityIndicator /> : undefined}
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
