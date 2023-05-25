import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import { Modal, Text, View } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { successDialogStyles } from "./SuccessDialog.style";
interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
}
const SuccessDialog = ({ dialogShow, dialogText, handleDialog }: Props) => {
  return (
    <Modal
      style={successDialogStyles.modalView}
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <View style={successDialogStyles.centeredView}>
        <View style={successDialogStyles.modalView}>
          <AntDesignIcon name="checkcircle" color={"#7ee287"} size={50}/>
          <Text style={successDialogStyles.modalText}>{dialogText}</Text>
          <ColorButton
            //styles.openButton을 복사한뒤 새로운 값 backgroundColor 추가
            color="#7ee287"
            handleClick={() => {
              handleDialog();
            }}
            label="닫기"
          />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessDialog;
