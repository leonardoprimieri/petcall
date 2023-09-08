import { db } from "@config/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { UserTypeEnum } from "src/enums/user-type.enum";

export type CreateUserParams = {
  fullName?: string;
  userType: keyof typeof UserTypeEnum;
  userId?: string;
};

export const createUserService = async (data: CreateUserParams) => {
  const result = await addDoc(collection(db, "users"), {
    fullName: data?.fullName,
    userType: data?.userType,
    userId: data?.userId,
  });

  return result;
};
