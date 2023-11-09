import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ChoiceButton } from "./components/choice-button/choice-button";
import {
  ChoicesContainer,
  Container,
  FormContainer,
  Subtitle,
} from "./second-step-styles";
import { Title } from "../components/title/title";

import { Button } from "~/components/button/button";
import { UserTypeEnum } from "~/enums/user-type.enum";
import { useNavigationRoutes } from "~/hooks/general/use-navigation-routes";

export function SecondStep() {
  const methods = useForm();
  const { handleGoToRegisterVeterinarian, handleGoToRegisterPetTutor } =
    useNavigationRoutes();

  const [selectedChoice, setSelectedChoice] =
    useState<keyof typeof UserTypeEnum>("PET_TUTOR");

  const handleSelectChoice = (type: keyof typeof UserTypeEnum) => {
    setSelectedChoice(type);
  };

  const onSubmit = () => {
    if (!selectedChoice) return;

    if (selectedChoice === "VETERINARIAN") {
      return handleGoToRegisterVeterinarian();
    }

    if (selectedChoice === "PET_TUTOR") {
      return handleGoToRegisterPetTutor();
    }
  };

  return (
    <Container>
      <Title>Antes de começar</Title>

      <Subtitle>
        Precisamos saber se você é tutor de pet ou médico veterinário:
      </Subtitle>

      <FormProvider {...methods}>
        <FormContainer>
          <ChoicesContainer>
            <ChoiceButton
              onPress={() => handleSelectChoice("PET_TUTOR")}
              type="PET_TUTOR"
              isSelected={selectedChoice === "PET_TUTOR"}
            />
            <ChoiceButton
              onPress={() => handleSelectChoice("VETERINARIAN")}
              type="VETERINARIAN"
              isSelected={selectedChoice === "VETERINARIAN"}
            />
          </ChoicesContainer>
          <Button onPress={onSubmit} disabled={!selectedChoice}>
            Continuar
          </Button>
        </FormContainer>
      </FormProvider>
    </Container>
  );
}
