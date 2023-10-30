import { Header } from "~/components/header/header";
import { Container, ItemsContainer } from "./veterinarian-home-screen-styles";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";
import { AppointmentRequest } from "./components";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";
import MedicalImage from "~/assets/medical.png";

export const VeterinarianHomeScreen = () => {
  return (
    <AuthorizedLayout>
      <Container>
        <Header />
        <AppointmentRequest />
        <ItemsContainer>
          <HomeMenuItem
            ImageProps={{
              source: MedicalImage,
            }}
            label="Histórico de Consultas"
          />
        </ItemsContainer>
      </Container>
    </AuthorizedLayout>
  );
};
