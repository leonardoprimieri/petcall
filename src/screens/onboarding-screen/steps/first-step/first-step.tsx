import React from "react";
import { Image } from "react-native";
import onboardingImage from "~/assets/onboarding-image.png";

import * as S from "./first-step-styles";
import { Button } from "~/components/button/button";
import { Title } from "../components/title/title";

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
