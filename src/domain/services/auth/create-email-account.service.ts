import { auth } from "@config/firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export type CreateEmailAccountParams = {
  email: string;
  password: string;
};

export function createEmailAccountService({
  email,
  password,
}: CreateEmailAccountParams) {
  return createUserWithEmailAndPassword(auth, email, password);
}
