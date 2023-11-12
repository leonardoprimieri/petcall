import { SignUpForm } from "./components/sign-up-form/sign-up-form";
import { Container, HeroText, LogoContainer } from "./sign-up-screen-styles";

import { AppLogo } from "~/components/app-logo/app-logo";
import { KeyboardContainer } from "~/components/keyboard-container/keyboard-container";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function SignUpScreen() {
  return (
    <DefaultLayout>
      <KeyboardContainer>
        <Container>
          <LogoContainer>
            <AppLogo />
          </LogoContainer>
          <HeroText>Criar Conta</HeroText>
          <SignUpForm />
        </Container>
      </KeyboardContainer>
    </DefaultLayout>
  );
}
