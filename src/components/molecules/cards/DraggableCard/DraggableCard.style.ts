import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const draggableCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: vw(100),
    height: vh(28)
  },
  contents: {
    fontSize: 16
  }
});
