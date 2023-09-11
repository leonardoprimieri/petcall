import { Header } from "@components/header/header";
import { Container } from "./veterinarian-home-screen-styles";
import { DefaultLayout } from "@layouts/default-layout/default-layout";

export const VeterinarianHomeScreen = () => {
  return (
    <DefaultLayout>
      <Container>
        <Header />
      </Container>
    </DefaultLayout>
  );
};
