import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { KeyboardAvoidingView, View } from "react-native";

import {
  Container,
  DetailsContainer,
  ProcessingPaymentLabel,
} from "./credit-card-step-styles";
import { CreditCardFormValidation } from "./validations/credit-card-form-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { PetEntity } from "~/domain/entities/pet-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { requestAppointmentService } from "~/domain/services/appointment";
import { useAuthentication } from "~/hooks";

type Props = {
  handleCloseModal: () => void;
  selectedPet: PetEntity | undefined;
  veterinarian: VeterinarianEntity;
};

export const CreditCardStep = ({
  handleCloseModal,
  selectedPet,
  veterinarian,
}: Props) => {
  const { userDetails } = useAuthentication();

  const methods = useForm({
    resolver: zodResolver(CreditCardFormValidation),
    mode: "onChange",
  });

  const handleConfirmAppointment = () => {
    if (!selectedPet) return;

    requestAppointmentService({
      veterinarianDetails: veterinarian,
      requestStatus: "pending",
      tutorDetails: {
        fullName: userDetails?.fullName,
        imageUrl: userDetails?.imageUrl,
        id: userDetails?.userId,
      },
      petDetails: selectedPet,
    });
  };

  const onSubmit = async () => {
    return new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
      handleCloseModal();
      handleConfirmAppointment();
    });
  };

  const isFormSubmitting = methods.formState.isSubmitting;

  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding"
      >
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

        <View style={{ paddingHorizontal: 55, marginTop: 32 }}>
          <Button
            disabled={!methods.formState.isValid}
            onPress={methods.handleSubmit(onSubmit)}
            isLoading={isFormSubmitting}
          >
            Confirmar
          </Button>
          {isFormSubmitting && (
            <ProcessingPaymentLabel>
              Estamos processando seu pagamento, isso pode levar alguns
              instantes ...
            </ProcessingPaymentLabel>
          )}
        </View>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};
