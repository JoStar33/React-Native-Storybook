import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const multiFormStyles = StyleSheet.create({
  container: {
    width: vw(90),
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white"
  },
});
