import { useRef } from "react";
import { Linking } from "react-native";

import { MeetingLink } from "./accept-appointment-card-styles";
import { AddNotePetModal } from "./components/add-pet-note-modal/add-pet-note-modal";
import { StatusCardContainer } from "../../appointment-request-styles";

import { Button } from "~/components/button/button";
import { useAuthentication } from "~/hooks";

export const AcceptAppointmentCard = () => {
  const modalRef = useRef<any>(null);

  const { userDetails } = useAuthentication();

  const openLink = () => {
    Linking.openURL(userDetails?.meetingUrl);
  };

  const handleOpenNoteModal = () => {
    modalRef.current?.present();
  };

  return (
    <>
      <AddNotePetModal ref={modalRef} />
      <StatusCardContainer>
        <MeetingLink onPress={openLink}>Acessar reunião</MeetingLink>
        <Button onPress={handleOpenNoteModal}>Finalizar Consulta</Button>
      </StatusCardContainer>
    </>
  );
};
