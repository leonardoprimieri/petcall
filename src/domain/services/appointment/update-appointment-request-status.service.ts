import { ref, update } from "firebase/database";

import { realTimeDb } from "~/config/firebase/firebase-config";
import { AppointmentEntity } from "~/domain/entities/appointment-entity";

type RequestAppointmentParams = {
  veterinarianId: string;
  requestStatus: AppointmentEntity["requestStatus"];
};

export const updateAppointmentRequestStatusService = ({
  veterinarianId,
  requestStatus,
}: RequestAppointmentParams) => {
  if (requestStatus === "finished") {
    return update(ref(realTimeDb, "appointment-requests/" + veterinarianId), {
      requestStatus,
    });
  }

  update(ref(realTimeDb, "appointment-requests/" + veterinarianId), {
    requestStatus,
  });
};
