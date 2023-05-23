import { StyleSheet } from "react-native";
import { vh } from "rxn-units";

export const movieRowListScreenSkeletonStyles = StyleSheet.create({
  container: {
    height: vh(70),
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "column",
  },
});
