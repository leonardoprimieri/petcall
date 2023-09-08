import { TextInputProps as RNInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, ErrorMessage, StyledInput } from "./text-input-styles";
import { forwardRef } from "react";

export type TextInputProps = {
  width?: string;
  invalid?: boolean;
  errorMessage?: string;
} & RNInputProps;

export const TextInput = forwardRef<any, TextInputProps>(function Input(
  props,
  ref
) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <StyledInput
        width={props.width}
        placeholderTextColor={COLORS.PARAGRAPH}
        ref={ref}
        {...props}
      />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </Container>
  );
});
