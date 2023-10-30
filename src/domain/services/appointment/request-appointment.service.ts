import { ref, set } from "firebase/database";
import { realTimeDb } from "~/config/firebase/firebase-config";
import { TutorEntity } from "~/domain/entities/tutor-entity";

type RequestAppointmentParams = {
  veterinarianId: string;
  tutorDetails: TutorEntity;
  requestStatus: "pending" | "accepted" | "rejected";
};

export const requestAppointmentService = ({
  veterinarianId,
  tutorDetails,
  requestStatus,
}: RequestAppointmentParams) => {
  set(ref(realTimeDb, "appointment-requests/" + veterinarianId), {
    veterinarianId,
    requestStatus,
    tutorDetails,
  });
};
