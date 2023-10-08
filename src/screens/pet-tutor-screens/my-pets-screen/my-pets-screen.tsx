import { HeaderLogo } from "~/components/header-logo/header-logo";
import { Container } from "./my-pets-screen-styles";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function MyPetsScreen() {
  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Seus Pets" />
      </Container>
    </DefaultLayout>
  );
}
