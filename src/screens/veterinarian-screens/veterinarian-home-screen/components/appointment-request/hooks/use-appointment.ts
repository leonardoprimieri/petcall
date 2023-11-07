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
      veterinarianId: appointment!.veterinarianDetails?.userId,
    })?.then(async () => {
      await saveAppointmentHistory({
        appointmentStatus: "finished",
        veterinarianDetails: appointment?.veterinarianDetails,
        tutorDetails: {
          fullName: appointment?.tutorDetails?.fullName as string,
          id: appointment?.tutorDetails?.id as string,
        },
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
