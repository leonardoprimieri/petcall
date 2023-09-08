import { db } from "@config/firebase/firebase-config";
import { collection, doc, updateDoc } from "firebase/firestore";

export type UpdateVeterinarianParams = {
  fullName?: string;
  whatsapp?: string;
  crmv?: string;
  userId?: string;
  daysAvailable?: number[];
};

export const updateVeterinarianService = async (
  data: UpdateVeterinarianParams
) => {
  const userRef = doc(db, "users", data.userId);

  const result = await updateDoc(userRef, data);

  return result;
};
