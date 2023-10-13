import { Header } from "~/components/header/header";
import { Container } from "./veterinarian-home-screen-styles";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";
import { AppointmentRequest } from "./components";

export const VeterinarianHomeScreen = () => {
  return (
    <AuthorizedLayout>
      <Container>
        <Header />
        <AppointmentRequest />
      </Container>
    </AuthorizedLayout>
  );
};
