import { Text } from "react-native";
import { Container } from "./appointment-request-styles";
import { Button } from "~/components/button/button";
import { updateAppointmentRequestStatusService } from "~/domain/services/veterinarian/update-appointment-request-status.service";
import { useAuthentication, useCheckForAppointments } from "~/hooks";

export const AppointmentRequest = () => {
  const { userDetails } = useAuthentication();

  const { appointment } = useCheckForAppointments({
    veterinarianId: userDetails?.userId,
  });

  if (!appointment || appointment.requestStatus === "finished") return null;

  return (
    <Container>
      <Text>
        Você tem uma solicitaçao de consulta de{" "}
        {appointment.tutorDetails.fullName}
      </Text>
      {appointment.requestStatus !== "pending" && (
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
      )}

      {appointment.requestStatus === "pending" && (
        <>
          <Button
            onPress={() => {
              updateAppointmentRequestStatusService({
                requestStatus: "accepted",
                veterinarianId: appointment.veterinarianId,
              });
            }}
          >
            Aceitar
          </Button>
          <Button
            onPress={() => {
              updateAppointmentRequestStatusService({
                requestStatus: "rejected",
                veterinarianId: appointment.veterinarianId,
              });
            }}
          >
            Recusar
          </Button>
        </>
      )}
    </Container>
  );
};
