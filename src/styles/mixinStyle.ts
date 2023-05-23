import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

const mixinStyle = StyleSheet.create({
  rowCardContainer: {
    marginTop: vh(2),
    width: vw(98),
    height: vh(30),
    borderRadius: 20,
    padding: vh(2),
    overflow: "hidden",
    backgroundColor: "white",
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
  input: {
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export { mixinStyle };

