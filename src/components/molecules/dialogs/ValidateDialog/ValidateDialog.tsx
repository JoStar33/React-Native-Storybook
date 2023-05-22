import { Modal, Text, TouchableHighlight, View } from "react-native";
import { validateDialogStyles } from "./ValidateDialog.style";

interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
}
const ValidateDialog = ({ dialogShow, dialogText, handleDialog }: Props) => {
  return (
    <Modal
      style={validateDialogStyles.modalView}
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <View style={validateDialogStyles.centeredView}>
        <View style={validateDialogStyles.modalView}>
          <Text style={validateDialogStyles.modalText}>{dialogText}</Text>
          <TouchableHighlight
            //styles.openButton을 복사한뒤 새로운 값 backgroundColor 추가
            style={{
              ...validateDialogStyles.openButton,
              backgroundColor: "#2196F3",
            }}
            onPress={() => {
              handleDialog();
            }}
          >
            <Text style={validateDialogStyles.textStyle}>닫기</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default ValidateDialog;
