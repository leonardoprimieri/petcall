import { ref, set } from "firebase/database";

import { realTimeDb } from "~/config/firebase/firebase-config";
import { PetEntity } from "~/domain/entities/pet-entity";
import { TutorEntity } from "~/domain/entities/tutor-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

type RequestAppointmentParams = {
  veterinarianDetails: VeterinarianEntity;
  tutorDetails: TutorEntity;
  petDetails: PetEntity;
  requestStatus: "pending" | "accepted" | "rejected";
};

export const requestAppointmentService = (data: RequestAppointmentParams) => {
  set(
    ref(
      realTimeDb,
      "appointment-requests/" + data?.veterinarianDetails?.userId
    ),
    data
  );
};
