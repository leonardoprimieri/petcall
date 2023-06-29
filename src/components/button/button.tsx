import { TouchableOpacityProps } from "react-native";
import * as S from "./button-styles";
import { PropsWithChildren } from "react";

type Props = {
  icon?: React.ReactNode;
  width?: string;
  bold?: boolean;
  variant?: "primary" | "secondary";
} & TouchableOpacityProps;

export function Button({
  bold,
  children,
  icon,
  width = "100%",
  variant = "primary",
  ...props
}: PropsWithChildren<Props>) {
  return (
    <S.Button width={width} variant={variant} {...props}>
      {Boolean(icon) && <S.Icon>{icon}</S.Icon>}
      <S.ButtonText bold={bold}>{children}</S.ButtonText>
    </S.Button>
  );
}
