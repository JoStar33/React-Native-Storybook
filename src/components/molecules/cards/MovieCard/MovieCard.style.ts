import { Platform, StyleSheet } from "react-native";

export const movieCardStyles = StyleSheet.create({
  container: {
    padding: "3%",
    flex: 1,
    margin: "4%",
    width: "40%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
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
      }
    }),
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    color: "black",
  },
  description: {
    height: 50,
    color: "black",
  },
});
