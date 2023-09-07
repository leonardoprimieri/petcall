import { TextInput, TextInputProps } from "@components/text-input/text-input";
import { Controller } from "react-hook-form";

type Props = {
  name: string;
} & TextInputProps;

export const ControlledTextInput = ({ name, ...props }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextInput
          invalid={invalid}
          errorMessage={error?.message}
          onChangeText={field.onChange}
          {...field}
          {...props}
        />
      )}
    />
  );
};
