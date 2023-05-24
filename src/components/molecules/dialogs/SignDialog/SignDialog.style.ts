import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";

const signDialogStyles = StyleSheet.create({
  modalView: {
    width: vw(90),
    ...mixinStyle.dialog,
  },
  dialogSort: {
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: "800",
    margin: 20,
  },
  signContainer: {
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    width: vw(70),
    height: vw(70),
  },
  signController: {
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export { signDialogStyles };
