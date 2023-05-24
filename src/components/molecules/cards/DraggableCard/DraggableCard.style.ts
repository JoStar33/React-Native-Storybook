import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const draggableCardStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: vw(100),
    height: vh(28),
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
      web: {
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: "800"
  },
  contents: {
    fontSize: 16
  }
});
