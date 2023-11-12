import { SignInForm } from "./components/sign-in-form/sign-in-form";
import { Container, HeroText, LogoContainer } from "./sign-in-screen-styles";

import { AppLogo } from "~/components/app-logo/app-logo";
import { KeyboardContainer } from "~/components/keyboard-container/keyboard-container";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function SignInScreen() {
  return (
    <DefaultLayout>
      <KeyboardContainer>
        <Container>
          <LogoContainer>
            <AppLogo />
          </LogoContainer>
          <HeroText>Entrar</HeroText>
          <SignInForm />
        </Container>
      </KeyboardContainer>
    </DefaultLayout>
  );
}
