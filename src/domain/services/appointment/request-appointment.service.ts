import { ref, set } from "firebase/database";
import { realTimeDb } from "~/config/firebase/firebase-config";
import { TutorEntity } from "~/domain/entities/tutor-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

type RequestAppointmentParams = {
  veterinarianDetails: VeterinarianEntity;
  tutorDetails: TutorEntity;
  requestStatus: "pending" | "accepted" | "rejected";
};

export const requestAppointmentService = ({
  veterinarianDetails,
  tutorDetails,
  requestStatus,
}: RequestAppointmentParams) => {
  set(ref(realTimeDb, "appointment-requests/" + veterinarianDetails?.userId), {
    veterinarianDetails,
    requestStatus,
    tutorDetails,
  });
};
