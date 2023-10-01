import { db } from "~/config/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export type CreateUserParams = {
  userId?: string;
};

export const completeUserRegistrationService = async (
  data: CreateUserParams
) => {
  const collectionRef = collection(db, "users");

  const result = await addDoc(collectionRef, data);

  return result;
};
