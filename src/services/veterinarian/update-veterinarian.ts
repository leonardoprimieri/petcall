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
  data: UpdateVeterinarianParams,
  userId: string
) => {
  const user = doc(db, "users", userId);

  const result = await updateDoc(user, data);

  return result;
};
