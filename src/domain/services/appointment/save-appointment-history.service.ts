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
  note?: string;
};

export const saveAppointmentHistoryService = async (
  data: SaveAppointmentHistoryParams,
) => {
  const collectionRef = collection(db, "appointments");

  const result = await addDoc(collectionRef, {
    ...data,
    finishedAt: Date.now(),
  });

  return result;
};
