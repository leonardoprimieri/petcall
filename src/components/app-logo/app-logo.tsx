import * as S from "./app-logo-styles";
import logoImg from "@assets/logo.png";

export const AppLogo = () => {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      <S.LogoText>Petcall</S.LogoText>
    </S.Container>
  );
};
