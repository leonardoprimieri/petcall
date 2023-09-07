import { TextInput, TextInputProps } from "@components/text-input/text-input";
import { Control, Controller } from "react-hook-form";

type Props = {
  name: string;
  required?: boolean;
} & TextInputProps;

export const ControlledTextInput = ({ name, required, ...props }: Props) => {
  return (
    <Controller
      name={name}
      rules={{ required }}
      render={({ field }) => (
        <TextInput onChangeText={field.onChange} {...field} {...props} />
      )}
    />
  );
};
