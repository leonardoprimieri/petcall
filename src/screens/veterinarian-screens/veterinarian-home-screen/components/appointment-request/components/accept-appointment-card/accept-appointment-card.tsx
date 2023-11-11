import { Linking } from "react-native";

import { MeetingLink } from "./accept-appointment-card-styles";
import { StatusCardContainer } from "../../appointment-request-styles";
import { useAppointment } from "../../hooks/use-appointment";

import { Button } from "~/components/button/button";
import { useAuthentication } from "~/hooks";

export const AcceptAppointmentCard = () => {
  const { userDetails } = useAuthentication();
  const { handleFinishAppointment } = useAppointment();

  const openLink = () => {
    Linking.openURL(userDetails?.meetingUrl);
  };

  return (
    <StatusCardContainer>
      <MeetingLink onPress={openLink}>Acessar reunião</MeetingLink>
      <Button
        onPress={() =>
          handleFinishAppointment({
            wasRejected: false,
          })
        }
      >
        Finalizar Consulta
      </Button>
    </StatusCardContainer>
  );
};
