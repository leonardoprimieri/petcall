import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { AppointmentEntity } from "~/domain/entities/appointment-entity";

export type LoadVeterinarianAppointmentsServiceParams = {
  veterinarianId: string;
  loadRejected?: boolean;
};

export const loadVeterinarianAppointmentsService = async ({
  veterinarianId,
  loadRejected = false,
}: LoadVeterinarianAppointmentsServiceParams) => {
  const appointmentsRef = collection(db, "appointments");

  const q = query(
    appointmentsRef,
    where("veterinarianDetails.userId", "==", veterinarianId),
    orderBy("wasRejected"),
    where("wasRejected", "in", loadRejected ? [true, false] : [false]),
    orderBy("finishedAt", "desc")
  );

  const appointments = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data())
  );

  return appointments as AppointmentEntity[];
};
