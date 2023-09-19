import * as S from "./app-logo-styles";
import logoImg from "~/assets/logo.png";

type Props = {
  removeText?: boolean;
};

export const AppLogo = ({ removeText }: Props) => {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      {!removeText && <S.LogoText>Petcall</S.LogoText>}
    </S.Container>
  );
};
