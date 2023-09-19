import { AppLogo } from "~/components/app-logo/app-logo";
import { KeyboardAvoidingView } from "react-native";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

import { Container, HeroText, LogoContainer } from "./sign-in-screen-styles";
import { SignInForm } from "./components/sign-in-form/sign-in-form";

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
