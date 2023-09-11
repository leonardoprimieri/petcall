import { TextInputProps as RNInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  ErrorMessage,
  Label,
  StyledInput,
} from "./text-input-styles";
import { forwardRef } from "react";

export type TextInputProps = {
  width?: string;
  invalid?: boolean;
  errorMessage?: string;
  label?: string;
} & RNInputProps;

export const TextInput = forwardRef<any, TextInputProps>(function Input(
  props,
  ref
) {
  const { COLORS } = useTheme();

  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
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