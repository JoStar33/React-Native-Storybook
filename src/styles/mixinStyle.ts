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
  dialog: {
    margin: 0,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 10,
      },
      web: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    })
  },
  mixinShadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 10,
      },
      web: {
        shadowOffset: {
          width: 0,
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    })
  }
});

export { mixinStyle };

