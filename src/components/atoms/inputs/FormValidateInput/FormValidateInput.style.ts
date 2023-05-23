import { StyleSheet } from "react-native";

export const formValidateInputStyles = StyleSheet.create({
  inputContainer: {
    margin: 2,
    width: 400,
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
  errorText: {
    color: "red",
  },
});
