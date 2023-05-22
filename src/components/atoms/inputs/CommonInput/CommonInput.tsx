import { TextInput } from "react-native";
import { commonInputStyles } from "./CommonInput.style";

const CommonInput = () => {
  return (
    <TextInput style={commonInputStyles.input}/>
  );
};

export default CommonInput;