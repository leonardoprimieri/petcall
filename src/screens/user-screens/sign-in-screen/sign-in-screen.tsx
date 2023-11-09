import { KeyboardAvoidingView } from "react-native";

import { SignInForm } from "./components/sign-in-form/sign-in-form";
import { Container, HeroText, LogoContainer } from "./sign-in-screen-styles";

import { AppLogo } from "~/components/app-logo/app-logo";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function SignInScreen() {
  return (
    <DefaultLayout>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding"
      >
        <Container>
          <LogoContainer>
            <AppLogo />
          </LogoContainer>
          <HeroText>Entrar</HeroText>
          <SignInForm />
        </Container>
      </KeyboardAvoidingView>
    </DefaultLayout>
  );
}
