import { AddPrefixToKeys, doc, updateDoc } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";

export type UpdateUserParams<T = object> = {
  userId: string;
  data: T extends { [x: string]: any } & AddPrefixToKeys<string, any>
    ? T
    : never;
};

export const updateUserProfileService = async <T>({
  data,
  userId,
}: UpdateUserParams<T>) => {
  const userRef = doc(db, "users", userId);

  await updateDoc(userRef, data);
};
