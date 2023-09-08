import { db } from "@config/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { UserTypeEnum } from "src/enums/user-type.enum";

export type CreateUserParams = {
  userType: keyof typeof UserTypeEnum;
  userId?: string;
};

export const createUserService = async (data: CreateUserParams) => {
  const collectionRef = collection(db, "users");

  const result = await addDoc(collectionRef, {
    userType: data?.userType,
    userId: data?.userId,
  });

  return result;
};
