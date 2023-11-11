import { Text } from "react-native";

import { ButtonsContainer } from "./pending-appointment-card-styles";
import {
  HeaderText,
  StatusCardContainer,
} from "../../appointment-request-styles";
import { useAppointment } from "../../hooks/use-appointment";

import { IconButton } from "~/components/icon-button/icon-button";
import { CheckIcon, XIcon } from "~/components/icons";

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
        {appointment?.tutorDetails.fullName}
      </HeaderText>
      <ButtonsContainer>
        <IconButton onPress={handleRejectAppointmentRequest}>
          <XIcon color="red" />
          <Text>Rejeitar</Text>
        </IconButton>
        <IconButton onPress={handleAcceptAppointmentRequest}>
          <CheckIcon color="green" />
          <Text>Aceitar</Text>
        </IconButton>
      </ButtonsContainer>
    </StatusCardContainer>
  );
};
