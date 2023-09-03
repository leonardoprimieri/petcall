import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase/firebase-config";

type EmailLoginParams = {
  email: string;
  password: string;
};

export function emailLogin({ email, password }: EmailLoginParams) {
  return signInWithEmailAndPassword(auth, email, password);
}
