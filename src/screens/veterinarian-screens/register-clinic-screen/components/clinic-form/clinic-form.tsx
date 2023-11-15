import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Container } from "./clinic-form-styles";
import {
  RegisterClinicFormData,
  RegisterClinicValidation,
} from "./validations/register-clinic-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { KeyboardContainer } from "~/components/keyboard-container/keyboard-container";
import { UploadImage } from "~/components/upload-image/upload-image";
import { createClinicService } from "~/domain/services";
import { useAuthentication, useNavigationRoutes, useToast } from "~/hooks";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";
import { useClinicStore } from "~/store/clinic-store";

type Props = {
  handleBackStep: () => void;
};

export const ClinicForm = ({ handleBackStep }: Props) => {
  const { userDetails } = useAuthentication();
  const { clinicPosition } = useClinicStore();
  const [imageUrl, setImageUrl] = useState("");

  const { handleGoToVeterinarianHomeScreen } = useNavigationRoutes();
  const { showToast } = useToast();

  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(RegisterClinicValidation),
  });

  const onSubmit = async (data: RegisterClinicFormData) => {
    await createClinicService({
      phone: data?.clinicPhone,
      name: data?.clinicName,
      complement: data?.clinicComplement,
      email: data?.clinicEmail,
      imageUrl,
      location: {
        latitude: clinicPosition?.latitude,
        longitude: clinicPosition?.longitude,
      },
      veterinarianDetails: {
        fullName: userDetails?.fullName,
        userId: userDetails?.userId,
        appointmentPrice: userDetails?.appointmentPrice,
        imageUrl: userDetails?.imageUrl,
        crmv: userDetails?.crmv,
        daysAvailable: userDetails?.daysAvailable,
        meetingUrl: userDetails?.meetingUrl,
        email: userDetails?.email,
      },
      id: Math.random().toString(),
    }).then(() => {
      showToast({
        message: "Clínica cadastrada com sucesso!",
        title: "Pronto!",
        type: "success",
      });
      handleGoToVeterinarianHomeScreen();
    });
  };

  if (!imageUrl)
    return (
      <AuthorizedLayout>
        <UploadImage
          onUpload={setImageUrl}
          title="Selecione a image da clínica"
        />
      </AuthorizedLayout>
    );

  return (
    <AuthorizedLayout>
      <HeaderLogo
        smallTitle
        text="Dados da clínica"
        onGoBack={handleBackStep}
      />
      <FormProvider {...methods}>
        <KeyboardContainer>
          <Container>
            <ControlledTextInput name="clinicName" label="Nome da Clínica" />
            <ControlledTextInput name="clinicComplement" label="Complemento" />
            <ControlledTextInput
              name="clinicPhone"
              label="Telefone"
              mask="phone"
            />
            <ControlledTextInput name="clinicEmail" label="E-mail" />
            <Button
              onPress={methods.handleSubmit(onSubmit as any)}
              style={{ marginTop: 16 }}
              width="300px"
              disabled={!methods.formState.isValid}
              isLoading={methods.formState.isSubmitting}
            >
              Registrar
            </Button>
          </Container>
        </KeyboardContainer>
      </FormProvider>
    </AuthorizedLayout>
  );
};
