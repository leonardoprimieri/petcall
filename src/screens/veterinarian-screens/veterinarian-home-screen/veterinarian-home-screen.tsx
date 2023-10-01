import { Header } from "~/components/header/header";
import { Container } from "./veterinarian-home-screen-styles";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";

export const VeterinarianHomeScreen = () => {
  return (
    <AuthorizedLayout>
      <Container>
        <Header />
      </Container>
    </AuthorizedLayout>
  );
};
