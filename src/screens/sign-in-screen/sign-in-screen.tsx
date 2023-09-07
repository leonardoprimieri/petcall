import { GoogleLogoIcon } from "@components/icons";
import * as S from "./sign-in-screen-styles";
import { AppLogo } from "@components/app-logo/app-logo";
import { Button } from "@components/button/button";
import { TextInput } from "@components/text-input/text-input";
import { KeyboardAvoidingView } from "react-native";
import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { useNavigationRoutes } from "@hooks/use-navigation-routes";
import { emailLogin } from "../../services/auth/email-login";

export function SignInScreen() {
  const { handleGoToOnboarding } = useNavigationRoutes();

  const onSubmit = async () => {
    await emailLogin({
      email: "leo.primieri@gmail.com",
      password: "qwe123QWE!@#",
    });
  };

  return (
    <DefaultLayout>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding"
      >
        <S.Container>
          <S.LogoContainer>
            <AppLogo />
          </S.LogoContainer>
          <S.HeroText>Entrar</S.HeroText>
          <Button
            width="270px"
            icon={<GoogleLogoIcon color="white" weight="bold" />}
            bold
            variant="secondary"
          >
            com Google
          </Button>
          <S.FooterText>Ou com email</S.FooterText>

          <S.Form>
            <TextInput placeholder="E-mail" keyboardType="email-address" />
            <TextInput placeholder="Senha" secureTextEntry />

            <Button width="300px" onPress={onSubmit}>
              Entrar
            </Button>
          </S.Form>

          <S.Footer>
            <S.FooterText>Novo usuário?</S.FooterText>
            <S.LinkButton onPress={handleGoToOnboarding}>
              <S.LinkText>Criar conta</S.LinkText>
            </S.LinkButton>
          </S.Footer>
        </S.Container>
      </KeyboardAvoidingView>
    </DefaultLayout>
  );
}
