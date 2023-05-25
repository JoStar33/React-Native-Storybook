import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import IconButton from "components/atoms/buttons/IconButton/IconButton";
import { Modal, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { cameraDialogStyles } from "./CameraDialog.style";

interface Props {
  dialogShow: boolean;
  handleDialog: () => void;
}

const CameraDialog = ({ dialogShow, handleDialog }: Props) => {
  const cameraWork = async () => {
    const result = await launchCamera({
      mediaType: "photo",
      cameraType: "back",
    });
    if (result.didCancel) {
      return null;
    }
    if (!result.assets) return;
    const localUri = result.assets[0].uri;
    const uriPath = localUri?.split("//").pop();
    const imageName = localUri?.split("/").pop();
    handleDialog();
  };
  const libraryWork = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    });
    if (result.didCancel) {
      return null;
    }
    if (!result.assets) return;
    const localUri = result.assets[0].uri;
    const uriPath = localUri?.split("//").pop();
    const imageName = localUri?.split("/").pop();
    handleDialog();
  };
  return (
    <Modal
      style={cameraDialogStyles.modalView}
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <View style={cameraDialogStyles.centeredView}>
        <View style={cameraDialogStyles.dialogContainer}>
          <View style={cameraDialogStyles.buttonContainer}>
            <IconButton
              handleClick={() => {
                cameraWork();
              }}
              label="사진 찍기"
              icon={<AntDesign size={25} name="camera" />}
            />
          </View>
          <View style={cameraDialogStyles.buttonContainer}>
            <IconButton
              handleClick={() => {
                libraryWork();
              }}
              label="사진 불러오기"
              icon={<FontAwesome size={25} name="photo" />}
            />
          </View>
          <View style={cameraDialogStyles.buttonContainer}>
            <ColorButton
              handleClick={() => {
                handleDialog();
              }}
              label="닫기"
              color={"skyblue"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CameraDialog;
