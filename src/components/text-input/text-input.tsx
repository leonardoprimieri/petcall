import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./text-input-styles";

type Props = {
  width?: string;
} & TextInputProps;

export const TextInput = ({ width, ...rest }: Props) => {
  const { COLORS } = useTheme();

  return (
    <S.Container
      width={width}
      placeholderTextColor={COLORS.PARAGRAPH}
      {...rest}
    />
  );
};
