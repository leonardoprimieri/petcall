import { useSaveAppointmentHistoryMutation } from "./use-save-appointment-history-mutation";

import { updateAppointmentRequestStatusService } from "~/domain/services/appointment";
import { useAuthentication, useCheckForAppointments } from "~/hooks";

export const useAppointment = () => {
  const { userDetails } = useAuthentication();

  const { saveAppointmentHistory } = useSaveAppointmentHistoryMutation();

  const { appointment } = useCheckForAppointments({
    veterinarianId: userDetails?.userId,
  });

  const handleFinishAppointment = ({
    note = "",
    wasRejected = false,
  }: {
    wasRejected?: boolean;
    note?: string;
  }) => {
    updateAppointmentRequestStatusService({
      requestStatus: "finished",
      veterinarianId: appointment?.veterinarianDetails?.userId as string,
    })?.then(async () => {
      await saveAppointmentHistory({
        appointmentStatus: "finished",
        veterinarianDetails: appointment?.veterinarianDetails,
        tutorDetails: appointment?.tutorDetails,
        wasRejected,
        petDetails: appointment?.petDetails,
        note,
      });
    });
  };

  const handleRejectAppointmentRequest = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "rejected",
      veterinarianId: appointment?.veterinarianDetails?.userId as string,
    }).then(() => {
      setTimeout(() => {
        handleFinishAppointment({
          wasRejected: true,
        });
      }, 4000);
    });
  };

  const handleAcceptAppointmentRequest = () => {
    updateAppointmentRequestStatusService({
      requestStatus: "accepted",
      veterinarianId: appointment?.veterinarianDetails?.userId as string,
    });
  };

  return {
    handleFinishAppointment,
    handleRejectAppointmentRequest,
    handleAcceptAppointmentRequest,
    appointment,
  };
};
