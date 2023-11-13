import { ButtonsContainer } from "./pending-appointment-card-styles";
import {
  HeaderText,
  StatusCardContainer,
} from "../../appointment-request-styles";
import { useAppointment } from "../../hooks/use-appointment";

import { Button } from "~/components/button/button";

export const PendingAppointmentCard = () => {
  const {
    appointment,
    handleAcceptAppointmentRequest,
    handleRejectAppointmentRequest,
  } = useAppointment();

  return (
    <StatusCardContainer>
      <HeaderText>
        Você tem uma solicitação de consulta de{" "}
        {appointment?.tutorDetails?.fullName}
      </HeaderText>
      <ButtonsContainer>
        <Button onPress={handleAcceptAppointmentRequest}>Aceitar</Button>
        <Button variant="tertiary" onPress={handleRejectAppointmentRequest}>
          Rejeitar
        </Button>
      </ButtonsContainer>
    </StatusCardContainer>
  );
};
