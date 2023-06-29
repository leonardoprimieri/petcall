import { GoogleLogoIcon } from "@components/icons";
import * as S from "./sign-in-screen-styles";
import { useNavigation } from "@react-navigation/native";
import { AppLogo } from "@components/app-logo/app-logo";
import { Button } from "@components/button/button";
import { TextInput } from "@components/text-input/text-input";
import { ROUTES_NAMES } from "@routes/routes.names.const";
import { KeyboardAvoidingView } from "react-native";
import { DefaultLayout } from "@layouts/default-layout/default-layout";

export function SignInScreen() {
  const navigation = useNavigation();

  const handleGoToOnboarding = () => {
    navigation.navigate(ROUTES_NAMES.ONBOARDING);
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

            <Button width="300px">Entrar</Button>
          </S.Form>

          <S.FooterText>
            Novo usuário?{" "}
            <S.LinkButton onPress={handleGoToOnboarding}>
              <S.LinkText>Criar conta</S.LinkText>
            </S.LinkButton>
          </S.FooterText>
        </S.Container>
      </KeyboardAvoidingView>
    </DefaultLayout>
  );
}
