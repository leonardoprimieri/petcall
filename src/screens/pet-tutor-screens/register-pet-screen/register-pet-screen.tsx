import { RegisterPetForm } from "./components/register-pet-form/register-pet-form";
import { Container } from "./register-pet-screen-styles";

import { HeaderLogo } from "~/components/header-logo/header-logo";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export const RegisterPetScreen = () => {
  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Registrar Pet" />
        <RegisterPetForm />
      </Container>
    </DefaultLayout>
  );
};
