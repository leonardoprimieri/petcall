import { HeaderLogo } from "~/components/header-logo/header-logo";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { Container } from "./register-pet-screen-styles";

import { RegisterPetForm } from "./components/register-pet-form/register-pet-form";

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
