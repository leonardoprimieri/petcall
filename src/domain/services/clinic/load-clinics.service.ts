import { collection, getDocs, query } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { ClinicEntity } from "~/domain/entities/clinic-entity";

export const loadClinicsService = async () => {
  const clinicsRef = collection(db, "clinics");

  const q = query(clinicsRef);

  const pets = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data()),
  );

  return pets as ClinicEntity[];
};
