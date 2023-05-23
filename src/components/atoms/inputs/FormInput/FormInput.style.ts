import { StyleSheet } from "react-native";
import { mixinStyle } from "styles/mixinStyle";

export const formInputStyles = StyleSheet.create({
  inputContainer: {
    margin: 2,
    width: 400,
  },
  input: {
    ...mixinStyle.input
  },
  inputTitle: {
    ...mixinStyle.inputTitle
  }
});
