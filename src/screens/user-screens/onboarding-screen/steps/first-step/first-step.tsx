import { Image } from "react-native";

import * as S from "./first-step-styles";
import { Title } from "../components/title/title";

import onboardingImage from "~/assets/onboarding-image.png";
import { Button } from "~/components/button/button";

type Props = {
  goToNextStep: () => void;
};

export function FirstStep({ goToNextStep }: Props) {
  return (
    <S.Container>
      <S.TextContainer>
        <Title>Bem vindo ao PetCall</Title>
        <S.Description>
          Vamos começar o seu processo de cadastro na plataforma
        </S.Description>
        <S.ButtonContainer>
          <Button onPress={goToNextStep}>Iniciar</Button>
        </S.ButtonContainer>
      </S.TextContainer>
      <Image source={onboardingImage} />
    </S.Container>
  );
}
