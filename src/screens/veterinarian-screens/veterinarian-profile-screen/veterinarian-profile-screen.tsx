import { FormProvider, useForm } from "react-hook-form";

import { Container } from "./veterinarian-profile-screen-styles";

import { Button } from "~/components/button/button";
import { AppointmentPriceInput, ControlledTextInput } from "~/components/form";
import { currencyMask } from "~/components/form/controlled-text-input/masks/currency-mask";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { KeyboardContainer } from "~/components/keyboard-container/keyboard-container";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { useAuthentication } from "~/hooks";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function VeterinarianProfileScreen() {
  const { userDetails } = useAuthentication();

  const methods = useForm({
    values: {
      name: userDetails?.fullName,
      appointmentPrice: currencyMask(userDetails?.appointmentPrice),
      meetingUrl: userDetails?.meetingUrl,
      daysAvailable: userDetails?.daysAvailable,
    },
  });

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Meu Perfil" />
        <FormProvider {...methods}>
          <ControlledTextInput name="name" label="Nome" />
          <AppointmentPriceInput />
          <ControlledTextInput name="meetingUrl" label="Link para reunião" />
          <WeekDaySelector />
          <Button width="300px">Salvar</Button>
        </FormProvider>
      </Container>
    </DefaultLayout>
  );
}
