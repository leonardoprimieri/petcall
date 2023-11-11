import { addDoc, collection } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { TutorEntity } from "~/domain/entities/tutor-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

export type SaveAppointmentHistoryParams = {
  veterinarianDetails: VeterinarianEntity | undefined;
  appointmentStatus: string;
  tutorDetails: TutorEntity | undefined;
  wasRejected?: boolean;
};

export const saveAppointmentHistoryService = async ({
  veterinarianDetails,
  appointmentStatus,
  tutorDetails,
  wasRejected,
}: SaveAppointmentHistoryParams) => {
  const collectionRef = collection(db, "appointments");

  const result = await addDoc(collectionRef, {
    veterinarianDetails,
    appointmentStatus,
    finishedAt: Date.now(),
    tutorDetails,
    wasRejected,
  });

  return result;
};
