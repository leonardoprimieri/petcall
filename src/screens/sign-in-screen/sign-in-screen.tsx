import * as S from "./sign-in-screen-styles";
import { GoogleLogo } from "phosphor-react-native";
import { AppLogo, Button } from "@components/index";
import { TextInput } from "@components/text-input/text-input";

export function SignInScreen() {
  return (
    <S.Container>
      <S.LogoContainer>
        <AppLogo />
      </S.LogoContainer>
      <S.HeroText>Entrar</S.HeroText>
      <Button
        width="176px"
        icon={<GoogleLogo color="white" weight="bold" />}
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
