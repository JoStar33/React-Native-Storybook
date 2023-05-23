import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { FormValidateModel } from "types/apps/form";
import { formValidateInputStyles } from "./FormValidateInput.style";

interface Props {
  model: FormValidateModel;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}

const FormValidateInput = ({ model, errors, control }: Props) => {
  return (
    <Controller
      control={control}
      name={model.name}
      rules={{
        required: model.required,
        validate: (value) => model.validate(value),
      }}
      render={({ field: { onChange, value } }) => (
        <>
          <View style={formValidateInputStyles.inputContainer}>
            <View>
              <Text style={formValidateInputStyles.inputTitle}>
                {model.label}
              </Text>
            </View>
            <TextInput
              id={model.name}
              secureTextEntry={model.type === "password"}
              placeholder={model.name}
              style={formValidateInputStyles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
            {errors[model.name] ? (
              <Text style={formValidateInputStyles.errorText}>
                {String(errors[model.name]?.message)}
              </Text>
            ) : null}
          </View>
        </>
      )}
    ></Controller>
  );
};

export default FormValidateInput;
