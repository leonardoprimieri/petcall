import { GoogleLogoIcon } from "@components/icons";
import * as S from "./sign-in-screen-styles";
import { AppLogo, Button, TextInput } from "@components/index";

export function SignInScreen() {
  return (
    <S.Container>
      <S.LogoContainer>
        <AppLogo />
      </S.LogoContainer>
      <S.HeroText>Entrar</S.HeroText>
      <Button
        width="176px"
        icon={<GoogleLogoIcon color="white" weight="bold" />}
        bold
        variant="secondary"
      >
        com Google
      </Button>
      <S.FooterText>Ou com email</S.FooterText>

      <S.Form>
        <TextInput placeholder="E-mail" keyboardType="email-address" />
        <TextInput placeholder="Senha" />

        <Button>Entrar</Button>
      </S.Form>

      <S.FooterText>
        Novo usuário? <S.LinkText>Criar conta</S.LinkText>
      </S.FooterText>
    </S.Container>
  );
}
