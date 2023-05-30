import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const headerStyles = StyleSheet.create({
  logo: {
    height: vw(10),
    width: vw(10),
    borderRadius: 100
  },
  leftButton: {
    justifyContent: "center",
    alignItems: "center",
    height: vw(15),
    width: vw(15),
  },
  rightButton: {
    justifyContent: "center",
    alignItems: "center",
    height: vw(15),
    width: vw(15),
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: vw(70),
    height: vw(15),
  },
  container: {
    height: vw(15),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
