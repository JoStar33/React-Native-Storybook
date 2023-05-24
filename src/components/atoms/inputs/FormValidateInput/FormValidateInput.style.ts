import { StyleSheet } from "react-native";
import { vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";

export const formValidateInputStyles = StyleSheet.create({
  inputContainer: {
    margin: 2,
    width: vw(70)
  },
  input: {
    ...mixinStyle.input
  },
  inputTitle: {
    ...mixinStyle.inputTitle
  },
  errorText: {
    color: "red",
  },
});
