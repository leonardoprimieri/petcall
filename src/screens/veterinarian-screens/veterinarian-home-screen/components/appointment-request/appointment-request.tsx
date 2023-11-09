import { Linking, Text } from "react-native";

import {
  ButtonsContainer,
  Container,
  HeaderText,
  MeetingLink,
} from "./appointment-request-styles";
import { useAppointment } from "./hooks/use-appointment";

import { Button } from "~/components/button/button";
import { IconButton } from "~/components/icon-button/icon-button";
import { CheckIcon, XIcon } from "~/components/icons";
import { useAuthentication } from "~/hooks";

export const AppointmentRequest = () => {
  const { userDetails } = useAuthentication();

  const openLink = () => {
    Linking.openURL(userDetails?.meetingUrl);
  };

  const {
    appointment,
    handleAcceptAppointmentRequest,
    handleFinishAppointment,
    handleRejectAppointmentRequest,
  } = useAppointment();

  if (!appointment || appointment.requestStatus === "finished") return null;

  return (
    <Container>
      {appointment.requestStatus !== "pending" && (
        <>
          <HeaderText>Acesse o link para entrar na consulta </HeaderText>
          <MeetingLink onPress={openLink}>
            {userDetails?.meetingUrl}
          </MeetingLink>
          <Button onPress={handleFinishAppointment}>Finalizar Consulta</Button>
        </>
      )}

      {appointment.requestStatus === "pending" && (
        <>
          <HeaderText>
            Você tem uma solicitação de consulta de{" "}
            {appointment.tutorDetails.fullName}
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
        </>
      )}
    </Container>
  );
};
