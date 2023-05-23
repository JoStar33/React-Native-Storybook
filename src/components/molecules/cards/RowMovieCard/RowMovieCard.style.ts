import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";

export const rowMovieCardStyles = StyleSheet.create({
  container: {
    ...mixinStyle.rowCardContainer,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  image: {
    height: vh(23),
    width: vh(23),
  },
  title: {
    width: vh(23),
    fontSize: 20,
    fontWeight: "800"
  },
  description: {
    width: vw(60),
    marginLeft: vw(5),
    fontSize: 15
  }
});
