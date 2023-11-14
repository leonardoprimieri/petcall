import { collection, addDoc } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { ClinicEntity } from "~/domain/entities/clinic-entity";

export type CreateClinicParams = ClinicEntity;

export const createClinicService = async (data: CreateClinicParams) => {
  const clinicsRef = collection(db, "clinics");

  const result = await addDoc(clinicsRef, data);

  return result;
};
