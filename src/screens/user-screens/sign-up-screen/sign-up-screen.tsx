import { KeyboardAvoidingView } from "react-native";

import { SignUpForm } from "./components/sign-up-form/sign-up-form";
import { Container, HeroText, LogoContainer } from "./sign-up-screen-styles";

import { AppLogo } from "~/components/app-logo/app-logo";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function SignUpScreen() {
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
          <HeroText>Criar Conta</HeroText>
          <SignUpForm />
        </Container>
      </KeyboardAvoidingView>
    </DefaultLayout>
  );
}
