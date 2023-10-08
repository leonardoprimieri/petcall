import {
  TextInput,
  TextInputProps,
} from "~/components/form/text-input/text-input";
import { Controller } from "react-hook-form";
import { getInputMask } from "./helpers/get-input-mask";

type Props = {
  name: string;
  mask?: "currency" | "phone";
} & TextInputProps;

export const ControlledTextInput = ({ name, mask, ...props }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { invalid, error } }) => {
        const handleInputMask = (event: string) => {
          if (!mask) return field.onChange(event);

          const formatted = getInputMask({
            event,
            mask,
          });

          field.onChange(formatted);
        };

        return (
          <TextInput
            invalid={invalid}
            errorMessage={error?.message}
            onChangeText={handleInputMask}
            {...field}
            {...props}
          />
        );
      }}
    />
  );
};
