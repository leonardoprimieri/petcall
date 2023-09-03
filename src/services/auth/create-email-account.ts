import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

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
