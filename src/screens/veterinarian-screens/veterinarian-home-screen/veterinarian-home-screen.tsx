import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";

import { AppointmentRequest } from "./components";
import { AddNotePetModal } from "./components/appointment-request/components/accept-appointment-card/components/add-pet-note-modal/add-pet-note-modal";
import { Container, ItemsContainer } from "./veterinarian-home-screen-styles";

import { Header } from "~/components/header/header";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";

const MENU_ITEMS = [
  {
    label: "Histórico de Consultas",
    image: require("~/assets/medical.png"),
    path: "VeterinarianAppointments",
  },
  {
    label: "Meu Perfil",
    image: require("~/assets/placeholder-user.png"),
    path: "VeterinarianProfile",
  },
  {
    label: "Registrar Clínica Veterinária",
    image: require("~/assets/clinic.png"),
    path: "RegisterClinic",
  },
];

export const VeterinarianHomeScreen = () => {
  const { navigate } = useNavigation();
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
          {MENU_ITEMS.map((item) => (
            <HomeMenuItem
              key={item.label}
              label={item.label}
              ImageProps={{
                source: item.image,
              }}
              onPress={() => navigate(item.path as any)}
            />
          ))}
        </ItemsContainer>
        <AddNotePetModal ref={modalRef} />
      </Container>
    </AuthorizedLayout>
  );
};
