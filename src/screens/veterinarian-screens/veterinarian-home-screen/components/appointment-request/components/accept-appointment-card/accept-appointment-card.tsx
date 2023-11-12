import { Linking } from "react-native";

import { MeetingLink } from "./accept-appointment-card-styles";
import { StatusCardContainer } from "../../appointment-request-styles";

import { Button } from "~/components/button/button";
import { useAuthentication } from "~/hooks";

type Props = {
  handleOpenNoteModal: () => void;
};

export const AcceptAppointmentCard = ({ handleOpenNoteModal }: Props) => {
  const { userDetails } = useAuthentication();

  const openLink = () => {
    Linking.openURL(userDetails?.meetingUrl);
  };

  return (
    <StatusCardContainer>
      <MeetingLink onPress={openLink}>Acessar reunião</MeetingLink>
      <Button onPress={handleOpenNoteModal}>Finalizar Consulta</Button>
    </StatusCardContainer>
  );
};
