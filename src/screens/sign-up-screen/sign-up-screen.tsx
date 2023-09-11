import { AppLogo } from "@components/app-logo/app-logo";
import { KeyboardAvoidingView } from "react-native";
import { DefaultLayout } from "@layouts/default-layout/default-layout";

import { Container, HeroText, LogoContainer } from "./sign-up-screen-styles";
import { SignUpForm } from "./components/sign-up-form/sign-up-form";

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
