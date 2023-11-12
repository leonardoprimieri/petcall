import { useRef } from "react";

import { AppointmentRequest } from "./components";
import { AddNotePetModal } from "./components/appointment-request/components/accept-appointment-card/components/add-pet-note-modal/add-pet-note-modal";
import { Container, ItemsContainer } from "./veterinarian-home-screen-styles";

import MedicalImage from "~/assets/medical.png";
import { Header } from "~/components/header/header";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";
import { useNavigationRoutes } from "~/hooks";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";

export const VeterinarianHomeScreen = () => {
  const { handleGoToVeterinarianAppointments } = useNavigationRoutes();
  const modalRef = useRef<any>(null);

  const handleOpenNoteModal = () => {
    modalRef.current?.present();
  };

  return (
    <AuthorizedLayout>
      <Container>
        <Header />
        <AppointmentRequest handleOpenNoteModal={handleOpenNoteModal} />
        <ItemsContainer>
          <HomeMenuItem
            ImageProps={{
              source: MedicalImage,
            }}
            label="Histórico de Consultas"
            onPress={handleGoToVeterinarianAppointments}
          />
        </ItemsContainer>
        <AddNotePetModal ref={modalRef} />
      </Container>
    </AuthorizedLayout>
  );
};
