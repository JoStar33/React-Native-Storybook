import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import FormInput from "components/atoms/inputs/FormInput/FormInput";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { FormModel, SubmitValue } from "types/apps/form";
import { multiFormStyles } from "./MultiForm.style";

interface Props {
  formModel: FormModel[];
  actionSubmit: (data: SubmitValue) => void;
  buttonText: string;
}

const MultiForm = ({ formModel, actionSubmit, buttonText }: Props) => {
  const {
    handleSubmit,
    control,
  } = useForm();
  return (
    <View style={multiFormStyles.container}>
      {formModel.map((model) => (
        <FormInput model={model} control={control} />
      ))}
      <ColorButton
        label={buttonText}
        color={"skyblue"}
        handleClick={handleSubmit((data) => actionSubmit(data))}
      />
    </View>
  );
};

export default MultiForm;
