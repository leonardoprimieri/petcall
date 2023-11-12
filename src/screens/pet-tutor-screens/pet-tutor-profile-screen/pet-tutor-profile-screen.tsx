import { FormProvider, useForm } from "react-hook-form";

import { Container } from "./pet-tutor-profile-screen-styles";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useAuthentication } from "~/hooks";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function PetTutorProfileScreen() {
  const { userDetails } = useAuthentication();

  const methods = useForm({
    values: {
      name: userDetails?.fullName,
    },
  });

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Meu Perfil" />
        <FormProvider {...methods}>
          <ControlledTextInput name="name" label="Nome" />
          <Button width="300px">Salvar</Button>
        </FormProvider>
      </Container>
    </DefaultLayout>
  );
}
