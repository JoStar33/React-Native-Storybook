import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import CameraDialog from "components/molecules/dialogs/CameraDialog/CameraDialog";
import { useState } from "react";
import { View } from "react-native";

const CameraScreen = () => {
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ColorButton
          label={"사진설정"}
          color={"skyblue"}
          handleClick={() => {
            setDialogShow(true)
          }}
        />
      </View>
      <CameraDialog dialogShow={dialogShow} handleDialog={() => {
        setDialogShow(false);
      }} />
    </>
  );
};

export default CameraScreen;
