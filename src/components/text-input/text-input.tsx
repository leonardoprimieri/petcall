import { TextInputProps as RNInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./text-input-styles";
import { forwardRef } from "react";

export type TextInputProps = {
  width?: string;
} & RNInputProps;

export const TextInput = forwardRef<any, TextInputProps>(function Input(
  { width, ...rest },
  ref
) {
  const { COLORS } = useTheme();

  return (
    <S.Container
      width={width}
      placeholderTextColor={COLORS.PARAGRAPH}
      ref={ref}
      {...rest}
    />
  );
});
