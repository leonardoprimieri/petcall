import { collection, addDoc } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { UserTypeEnum } from "~/enums/user-type.enum";

export type CreateUserParams<T = object> = {
  userId?: string;
  userType: UserTypeEnum;
  email: string;
} & T;

export const createUserService = async <T>(data: CreateUserParams<T>) => {
  const collectionRef = collection(db, "users");

  const result = await addDoc(collectionRef, data);

  return result;
};
