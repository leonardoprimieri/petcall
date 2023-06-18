import * as S from "./sign-in-screen-styles";
import { GoogleLogo } from "phosphor-react-native";
import { AppLogo, Button } from "@components/index";

export function SignInScreen() {
  return (
    <S.Container>
      <S.LogoContainer>
        <AppLogo />
      </S.LogoContainer>
      <S.HeroText>Entrar</S.HeroText>
      <Button width="176px" icon={<GoogleLogo color="white" weight="bold" />}>
        com Google
      </Button>
      <S.FooterText>Ou com email</S.FooterText>

      <Button width="308px">Entrar</Button>

      <S.FooterText>
        Novo usuário? <S.LinkText>Criar conta</S.LinkText>
      </S.FooterText>
    </S.Container>
  );
}
