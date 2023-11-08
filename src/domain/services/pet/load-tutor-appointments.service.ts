import { db } from "~/config/firebase/firebase-config";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { AppointmentEntity } from "~/domain/entities/appointment-entity";

export type LoadTutorAppointmentsServiceParams = {
  tutorId: string;
};

export const loadTutorAppointmentsService = async ({
  tutorId,
}: LoadTutorAppointmentsServiceParams) => {
  const appointmentsRef = collection(db, "appointments");

  const q = query(
    appointmentsRef,
    where("tutorDetails.id", "==", tutorId),
    orderBy("finishedAt", "desc")
  );

  const appointments = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data())
  );

  return appointments as AppointmentEntity[];
};
