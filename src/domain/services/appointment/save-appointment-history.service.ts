import { addDoc, collection } from "firebase/firestore";
import { db } from "~/config/firebase/firebase-config";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { formatDate } from "~/helpers/format-date";

export type SaveAppointmentHistoryParams = {
  veterinarianDetails: VeterinarianEntity | undefined;
  appointmentStatus: string;
  veterinarianName?: string;
  tutorDetails: {
    id: string;
    fullName: string;
  };
};

export const saveAppointmentHistoryService = async ({
  veterinarianDetails,
  appointmentStatus,
  tutorDetails,
}: SaveAppointmentHistoryParams) => {
  const collectionRef = collection(db, "appointments");

  console.log(Date);

  const result = await addDoc(collectionRef, {
    veterinarianDetails,
    appointmentStatus,
    finishedAt: formatDate(new Date()),
    tutorDetails,
  });

  return result;
};
