import { addDoc, collection } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { PetEntity } from "~/domain/entities/pet-entity";
import { TutorEntity } from "~/domain/entities/tutor-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

export type SaveAppointmentHistoryParams = {
  veterinarianDetails: VeterinarianEntity | undefined;
  appointmentStatus: string;
  tutorDetails: TutorEntity | undefined;
  petDetails: PetEntity | undefined;
  wasRejected?: boolean;
};

export const saveAppointmentHistoryService = async ({
  veterinarianDetails,
  appointmentStatus,
  tutorDetails,
  wasRejected,
  petDetails,
}: SaveAppointmentHistoryParams) => {
  const collectionRef = collection(db, "appointments");

  const result = await addDoc(collectionRef, {
    veterinarianDetails,
    appointmentStatus,
    finishedAt: Date.now(),
    tutorDetails,
    wasRejected,
    petDetails,
  });

  return result;
};
