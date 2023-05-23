import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";

export const rowMovieCardSkeletonStyles = StyleSheet.create({
  container: {
    ...mixinStyle.rowCardContainer
  },
  skeletonContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
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
    marginTop: 10,
    fontSize: 20,
    width: vh(23),
    height: 20,
    fontWeight: "800"
  },
  description: {
    marginLeft: vw(5),
    width: vw(60),
    height: vh(20)
  }
});
