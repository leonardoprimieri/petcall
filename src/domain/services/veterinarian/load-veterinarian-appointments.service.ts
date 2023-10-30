import { db } from "~/config/firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AppointmentEntity } from "~/domain/entities/appointment-entity";

export type LoadVeterinarianAppointmentsServiceParams = {
  veterinarianId: string;
};

export const loadVeterinarianAppointmentsService = async ({
  veterinarianId,
}: LoadVeterinarianAppointmentsServiceParams) => {
  const appointmentsRef = collection(db, "appointments");

  const q = query(
    appointmentsRef,
    where("veterinarianId", "==", veterinarianId)
  );

  const appointments = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data())
  );

  return appointments as AppointmentEntity[];
};
