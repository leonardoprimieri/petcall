import { addDoc, collection } from "firebase/firestore";
import { db } from "~/config/firebase/firebase-config";

export type SaveAppointmentHistoryParams = {
  veterinarianId: string;
  tutorId: string;
  appointmentStatus: string;
};

export const saveAppointmentHistoryService = async ({
  veterinarianId,
  tutorId,
  appointmentStatus,
}: SaveAppointmentHistoryParams) => {
  const collectionRef = collection(db, "appointments");

  const result = await addDoc(collectionRef, {
    veterinarianId,
    tutorId,
    appointmentStatus,
    finishedAt: new Date(),
  });

  return result;
};
