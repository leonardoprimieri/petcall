import { Image } from "react-native";
import * as S from "./onboarding-screen-styles";
import { Button } from "@components/index";
import onboardingImage from "@assets/onboarding-image.png";

export function OnboardingScreen() {
  return (
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
  );
}
