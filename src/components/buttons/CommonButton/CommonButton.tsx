import { Text } from "react-native";
import { ButtonContainer } from "./CommonButton.style";

interface Props {
  label: string;
  handleClick: () => void;
}

const CommonButton = ({label, handleClick}: Props) => {
  return (
    <ButtonContainer onPress={handleClick}>
      <Text>{label}</Text>
    </ButtonContainer>
  );
};

export default CommonButton;