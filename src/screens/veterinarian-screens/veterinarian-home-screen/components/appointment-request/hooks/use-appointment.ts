import { useSaveAppointmentHistoryMutation } from "./use-save-appointment-history-mutation";

import { updateAppointmentRequestStatusService } from "~/domain/services/appointment";
import { useAuthentication, useCheckForAppointments } from "~/hooks";

export const useAppointment = () => {
  const { userDetails } = useAuthentication();

  const { saveAppointmentHistory } = useSaveAppointmentHistoryMutation();

  const { appointment } = useCheckForAppointments({
    veterinarianId: userDetails?.userId,
  });

  const handleFinishAppointment = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "finished",
      veterinarianId: appointment!.veterinarianDetails?.userId,
    })?.then(async () => {
      await saveAppointmentHistory({
        appointmentStatus: "finished",
        veterinarianDetails: appointment?.veterinarianDetails,
        tutorDetails: appointment?.tutorDetails,
      });
    });
  };

  const handleRejectAppointmentRequest = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "rejected",
      veterinarianId: appointment!.veterinarianDetails?.userId,
    });
  };

  const handleAcceptAppointmentRequest = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "accepted",
      veterinarianId: appointment!.veterinarianDetails?.userId,
    });
  };

  return {
    handleFinishAppointment,
    handleRejectAppointmentRequest,
    handleAcceptAppointmentRequest,
    appointment,
  };
};
