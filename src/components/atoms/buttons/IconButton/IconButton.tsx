import { Text, TouchableOpacity } from "react-native";
import { iconButtonStyles } from "./IconButton.style";

interface Props {
  icon: React.ReactElement;
  label: string;
  handleClick: () => void;
}

const IconButton = ({ label, icon, handleClick }: Props) => {
  return (
    <TouchableOpacity onPress={handleClick} style={iconButtonStyles.container}>
      {
        icon
      }
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
