import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { iconButtonStyles } from "./IconButton.style";

interface Props {
  color: string;
  iconName: string;
  label: string;
  handleClick: () => void;
}

const IconButton = ({ color, iconName, label, handleClick }: Props) => {
  return (
    <TouchableOpacity onPress={handleClick} style={iconButtonStyles.container}>
      <Icon name={iconName} size={30} color={color} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
