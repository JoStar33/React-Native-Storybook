import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const signScreenStyles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: vw(100),
    height: vh(100)
  },
});