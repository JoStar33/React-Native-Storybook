import MovieCard from "components/molecules/cards/MovieCard/MovieCard";
import { useMovieQuery } from "hooks/movies/useMovieQuery";
import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { MovieCardContainer } from "./MovieScreen.style";

const MovieScreen = () => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useMovieQuery();
  return (
    <MovieCardContainer>
      <SafeAreaView>
        <FlatList
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
              title={movie.item.title_english}
              description={movie.item.description_full}
              image={movie.item.medium_cover_image}
            />
          )}
        />
      </SafeAreaView>
    </MovieCardContainer>
  );
};

export default MovieScreen;
