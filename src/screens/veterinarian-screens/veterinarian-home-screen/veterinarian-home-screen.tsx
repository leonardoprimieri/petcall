import { AppointmentRequest } from "./components";
import { Container, ItemsContainer } from "./veterinarian-home-screen-styles";

import MedicalImage from "~/assets/medical.png";
import { Header } from "~/components/header/header";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";
import { useNavigationRoutes } from "~/hooks";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";

export const VeterinarianHomeScreen = () => {
  const { handleGoToVeterinarianAppointments } = useNavigationRoutes();

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
            onPress={handleGoToVeterinarianAppointments}
          />
        </ItemsContainer>
      </Container>
    </AuthorizedLayout>
  );
};
