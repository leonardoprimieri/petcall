import { updateAppointmentRequestStatusService } from "~/domain/services/appointment";
import { useAuthentication, useCheckForAppointments } from "~/hooks";
import { useSaveAppointmentHistoryMutation } from "./use-save-appointment-history-mutation";

export const useAppointment = () => {
  const { userDetails } = useAuthentication();

  const { saveAppointmentHistory } = useSaveAppointmentHistoryMutation();

  const { appointment } = useCheckForAppointments({
    veterinarianId: userDetails?.userId,
  });

  const handleFinishAppointment = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "finished",
      veterinarianId: appointment!.veterinarianId,
    })?.then(async () => {
      await saveAppointmentHistory({
        appointmentStatus: "finished",
        tutorId: appointment!.tutorDetails?.id,
        veterinarianId: appointment!.veterinarianId,
      });
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
