import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Container } from "./veterinarian-profile-screen-styles";
import {
  RegisterVeterinarianFormData,
  registerVeterinarianValidation,
} from "../register-veterinarian-screen/validations/register-veterinarian-validation";

import { Button } from "~/components/button/button";
import { AppointmentPriceInput, ControlledTextInput } from "~/components/form";
import { currencyMask } from "~/components/form/controlled-text-input/masks/currency-mask";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { updateUserProfileService } from "~/domain/services";
import { useAuthentication, useNavigationRoutes } from "~/hooks";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function VeterinarianProfileScreen() {
  const { userDetails } = useAuthentication();
  const { handleGoToVeterinarianHomeScreen } = useNavigationRoutes();

  const methods = useForm({
    values: {
      fullName: userDetails?.fullName,
      appointmentPrice: currencyMask(userDetails?.appointmentPrice),
      meetingUrl: userDetails?.meetingUrl,
      daysAvailable: userDetails?.daysAvailable,
      birthDate: userDetails?.birthDate,
      crmv: userDetails?.crmv,
    },
    resolver: zodResolver(registerVeterinarianValidation),
  });

  const onSubmit = async (data: RegisterVeterinarianFormData) => {
    await updateUserProfileService({
      data,
      userId: userDetails?.id,
    }).then(handleGoToVeterinarianHomeScreen);
  };

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Meu Perfil" />
        <FormProvider {...methods}>
          <ControlledTextInput name="fullName" label="Nome" />
          <ControlledTextInput name="crmv" label="CRMV" />
          <ControlledTextInput
            name="birthDate"
            label="Data de Nascimento"
            mask="birthDate"
            maxLength={10}
            keyboardType="numeric"
          />
          <AppointmentPriceInput />
          <ControlledTextInput name="meetingUrl" label="Link para reunião" />
          <WeekDaySelector />
          <Button
            isLoading={methods.formState.isSubmitting}
            disabled={!methods.formState.isValid}
            onPress={methods.handleSubmit(onSubmit as any)}
            width="300px"
          >
            Salvar
          </Button>
        </FormProvider>
      </Container>
    </DefaultLayout>
  );
}
