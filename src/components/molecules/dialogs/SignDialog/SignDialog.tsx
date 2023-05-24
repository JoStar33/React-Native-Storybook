import React, { useRef } from "react";
import { signDialogStyles } from "./SignDialog.style";
import { Modal, Text, TouchableHighlight, View } from "react-native";
import SignatureScreen, { SignatureViewRef } from "react-native-signature-canvas"
import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";

interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
  getImageInfo: (image: string) => void;
}

const SignDialog = ({
  dialogShow,
  dialogText,
  handleDialog,
  getImageInfo,
}: Props) => {
  const signRef = useRef<SignatureViewRef>(null);
  const closeDialog = () => {
    signRef.current?.clearSignature()
    handleDialog();
  }
  const saveEvent = () => {
    signRef.current?.readSignature();
  }
  return (
    <Modal
      style={signDialogStyles.modalView}
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <View style={signDialogStyles.dialogSort}>
        <Text style={signDialogStyles.dialogTitle}>{dialogText}</Text>
        <View style={signDialogStyles.signContainer}>
          <SignatureScreen
            ref={signRef}
            onOK={(result) => {
              getImageInfo(result);
              handleDialog();
            }}
            autoClear={true}
            descriptionText={"서명"}
          />
        </View>
        <View style={signDialogStyles.signController}>
          <ColorButton
            label={"저장"}
            color={"blue"}
            handleClick={saveEvent}
          />
          <ColorButton
            label={"닫기"}
            color={"red"}
            handleClick={closeDialog}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SignDialog;
