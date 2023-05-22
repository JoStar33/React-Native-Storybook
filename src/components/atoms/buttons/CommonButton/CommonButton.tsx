import { Text, TouchableOpacity } from "react-native";
import { commonButtonStyles } from "./CommonButton.style";

interface Props {
  label: string;
  handleClick: () => void;
}

const CommonButton = ({label, handleClick}: Props) => {
  return (
    <TouchableOpacity style={commonButtonStyles.container} onPress={handleClick}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;