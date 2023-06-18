import * as S from "./button-styles";
import { PropsWithChildren } from "react";

type Props = {
  icon?: React.ReactNode;
  width?: string;
  bold?: boolean;
  variant?: "primary" | "secondary";
};

export function Button({
  bold,
  children,
  icon,
  width,
  variant = "primary",
}: PropsWithChildren<Props>) {
  return (
    <S.Button width={width} variant={variant}>
      {Boolean(icon) && <S.Icon>{icon}</S.Icon>}
      <S.ButtonText bold={bold}>{children}</S.ButtonText>
    </S.Button>
  );
}
