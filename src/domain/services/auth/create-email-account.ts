import { auth } from "@config/firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

type CreateEmailAccountParams = {
  email: string;
  password: string;
};

export function createEmailAccount({
  email,
  password,
}: CreateEmailAccountParams) {
  return createUserWithEmailAndPassword(auth, email, password);
}
