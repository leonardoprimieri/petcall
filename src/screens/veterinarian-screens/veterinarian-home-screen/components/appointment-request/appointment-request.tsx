import { Linking, Text } from "react-native";
import {
  ButtonsContainer,
  Container,
  HeaderText,
  MeetingLink,
} from "./appointment-request-styles";
import { Button } from "~/components/button/button";
import { updateAppointmentRequestStatusService } from "~/domain/services/veterinarian/update-appointment-request-status.service";
import { useAuthentication, useCheckForAppointments } from "~/hooks";
import { IconButton } from "~/components/icon-button/icon-button";
import { CheckIcon, XIcon } from "~/components/icons";

export const AppointmentRequest = () => {
  const { userDetails } = useAuthentication();

  const { appointment } = useCheckForAppointments({
    veterinarianId: userDetails?.userId,
  });

  if (!appointment || appointment.requestStatus === "finished") return null;

  const openLink = () => {
    Linking.openURL(userDetails?.meetingUrl);
  };

  return (
    <Container>
      {appointment.requestStatus !== "pending" && (
        <>
          <HeaderText>Acesse o link para entrar na consulta </HeaderText>
          <MeetingLink onPress={openLink}>
            {userDetails?.meetingUrl}
          </MeetingLink>
          <Button
            onPress={() => {
              updateAppointmentRequestStatusService({
                requestStatus: "finished",
                veterinarianId: appointment.veterinarianId,
              });
            }}
          >
            Finalizar Consulta
          </Button>
        </>
      )}

      {appointment.requestStatus === "pending" && (
        <>
          <HeaderText>
            Você tem uma solicitaçao de consulta de{" "}
            {appointment.tutorDetails.fullName}
          </HeaderText>
          <ButtonsContainer>
            <IconButton
              onPress={() => {
                updateAppointmentRequestStatusService({
                  requestStatus: "rejected",
                  veterinarianId: appointment.veterinarianId,
                });
              }}
            >
              <XIcon color="red" />
              <Text>Rejeitar</Text>
            </IconButton>
            <IconButton
              onPress={() => {
                updateAppointmentRequestStatusService({
                  requestStatus: "accepted",
                  veterinarianId: appointment.veterinarianId,
                });
              }}
            >
              <CheckIcon color="green" />
              <Text>Aceitar</Text>
            </IconButton>
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
};
