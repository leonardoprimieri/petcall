import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { SuccessPaymentMessage } from "./components/success-payment-message/success-payment-message";
import {
  ButtonContainer,
  Container,
  DetailsContainer,
  ProcessingPaymentLabel,
} from "./credit-card-step-styles";
import {
  CreditCardFormData,
  CreditCardFormValidation,
} from "./validations/credit-card-form-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { KeyboardContainer } from "~/components/keyboard-container/keyboard-container";
import { PetEntity } from "~/domain/entities/pet-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

type Props = {
  handleCloseModal: () => void;
  handlePreviousStep: () => void;
  selectedPet: PetEntity | undefined;
  veterinarian: VeterinarianEntity;
  handleConfirmAppointment: () => void;
};

export const CreditCardStep = ({
  handleCloseModal,
  handleConfirmAppointment,
  handlePreviousStep,
}: Props) => {
  const [showConfirmedPaymentMessage, setShowConfirmedPaymentMessage] =
    useState(false);

  const methods = useForm<CreditCardFormData>({
    resolver: zodResolver(CreditCardFormValidation),
    mode: "onChange",
  });

  const onSubmit = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1500))
      .then(() => {
        setShowConfirmedPaymentMessage(true);
      })
      .then(() => {
        new Promise((resolve) => setTimeout(resolve, 1500)).then(() => {
          handleCloseModal();
          handleConfirmAppointment();
        });
      });
  };

  const isFormSubmitting = methods.formState.isSubmitting;

  if (showConfirmedPaymentMessage) {
    return <SuccessPaymentMessage />;
  }

  return (
    <FormProvider {...methods}>
      <KeyboardContainer>
        <Container>
          <ControlledTextInput
            placeholderTextColor="#ccc"
            name="fullName"
            placeholder="Joana da Silva"
            label="Seu nome"
          />
          <ControlledTextInput
            placeholderTextColor="#ccc"
            name="cardNumber"
            placeholder="1234 1234 1234 1234"
            label="Número do cartão"
            mask="creditCard"
            maxLength={19}
          />
          <DetailsContainer>
            <ControlledTextInput
              placeholderTextColor="#ccc"
              name="cardExpDate"
              placeholder="MM/DD"
              label="Data de expiração"
              width="160px"
              mask="expirationDate"
              maxLength={5}
            />
            <ControlledTextInput
              placeholderTextColor="#ccc"
              name="cardCvv"
              placeholder="***"
              label="CVV"
              width="130px"
              maxLength={3}
            />
          </DetailsContainer>
          <ControlledTextInput
            placeholderTextColor="#ccc"
            name="zipCode"
            placeholder="00000-000"
            label="CEP"
            mask="zipCode"
          />
        </Container>

        <ButtonContainer>
          {!isFormSubmitting && (
            <>
              <Button
                disabled={!methods.formState.isValid}
                onPress={methods.handleSubmit(onSubmit)}
                isLoading={isFormSubmitting}
              >
                Confirmar
              </Button>
              <Button onPress={handlePreviousStep} variant="tertiary">
                Voltar
              </Button>
            </>
          )}
          {isFormSubmitting && (
            <ProcessingPaymentLabel>
              Estamos processando seu pagamento, isso pode levar alguns
              instantes ...
            </ProcessingPaymentLabel>
          )}
        </ButtonContainer>
      </KeyboardContainer>
    </FormProvider>
  );
};
