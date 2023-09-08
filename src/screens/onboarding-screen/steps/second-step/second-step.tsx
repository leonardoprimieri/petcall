import {
  ChoicesContainer,
  Container,
  FormContainer,
  Subtitle,
} from "./second-step-styles";
import { Button } from "@components/button/button";
import { Title } from "../components/title/title";
import { FormProvider, useForm } from "react-hook-form";
import { ChoiceButton } from "./components/choice-button/choice-button";
import { useState } from "react";

export function SecondStep() {
  const methods = useForm();

  const [selectedChoice, setSelectedChoice] = useState<
    "veterinary" | "pet-tutor"
  >();

  const handleSelectChoice = (type: "veterinary" | "pet-tutor") => {
    setSelectedChoice(type);
  };

  return (
    <Container>
      <Title>Antes de começar</Title>

      <Subtitle>
        Precisamos saber se você é tutor de pet ou médico veterinário
      </Subtitle>

      <FormProvider {...methods}>
        <FormContainer>
          <ChoicesContainer>
            <ChoiceButton
              onPress={() => handleSelectChoice("veterinary")}
              type="veterinary"
              isSelected={selectedChoice === "veterinary"}
            />
            <ChoiceButton
              onPress={() => handleSelectChoice("pet-tutor")}
              type="pet-tutor"
              isSelected={selectedChoice === "pet-tutor"}
            />
          </ChoicesContainer>
          <Button disabled={!selectedChoice}>
            {!selectedChoice ? "Selecione uma opção" : "Continuar"}
          </Button>
        </FormContainer>
      </FormProvider>
    </Container>
  );
}
