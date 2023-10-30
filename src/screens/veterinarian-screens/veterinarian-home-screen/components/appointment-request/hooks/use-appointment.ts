import { updateAppointmentRequestStatusService } from "~/domain/services/veterinarian/update-appointment-request-status.service";
import { useAuthentication, useCheckForAppointments } from "~/hooks";

export const useAppointment = () => {
  const { userDetails } = useAuthentication();

  const { appointment } = useCheckForAppointments({
    veterinarianId: userDetails?.userId,
  });

  const handleFinishAppointment = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "finished",
      veterinarianId: appointment!.veterinarianId,
    });
  };

  const handleRejectAppointmentRequest = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "rejected",
      veterinarianId: appointment!.veterinarianId,
    });
  };

  const handleAcceptAppointmentRequest = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "accepted",
      veterinarianId: appointment!.veterinarianId,
    });
  };

  return {
    handleFinishAppointment,
    handleRejectAppointmentRequest,
    handleAcceptAppointmentRequest,
    appointment,
  };
};
