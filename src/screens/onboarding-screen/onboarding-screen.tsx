import { Image } from "react-native";
import * as S from "./onboarding-screen-styles";
import onboardingImage from "@assets/onboarding-image.png";
import { Button } from "@components/button/button";
import { DefaultLayout } from "@layouts/default-layout/default-layout";

export function OnboardingScreen() {
  return (
    <DefaultLayout>
      <S.Container>
        <S.TextContainer>
          <S.Title>Bem vindo ao PetCall</S.Title>
          <S.Description>
            Vamos começar o seu processo de cadastro na plataforma
          </S.Description>
          <S.ButtonContainer>
            <Button>Iniciar</Button>
          </S.ButtonContainer>
        </S.TextContainer>
        <Image source={onboardingImage} />
      </S.Container>
    </DefaultLayout>
  );
}
