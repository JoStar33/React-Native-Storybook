import { StyleSheet } from "react-native";
import { mixinStyle } from "styles/mixinStyle";

export const cameraDialogStyles = StyleSheet.create({
  centeredView: {
    height: 400,
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 22,
  },
  modalView: {
    ...mixinStyle.dialog
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  dialogContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    ...mixinStyle.mixinShadow
  }
});
