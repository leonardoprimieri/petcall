import { auth } from "@config/firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

type EmailLoginParams = {
  email: string;
  password: string;
};

export function emailLogin({ email, password }: EmailLoginParams) {
  return signInWithEmailAndPassword(auth, email, password);
}
