import * as S from "./button-styles";
import { PropsWithChildren } from "react";

type Props = {
  icon?: React.ReactNode;
  width?: string;
};

export function Button({ children, icon, width }: PropsWithChildren<Props>) {
  return (
    <S.Button width={width}>
      {Boolean(icon) && <S.Icon>{icon}</S.Icon>}
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
}
