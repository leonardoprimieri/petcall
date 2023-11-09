import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "~/config/firebase/firebase-config";
import { SignUpFormData } from "~/screens/sign-up-screen/validation/sign-up-form-validation";

export function createEmailAccountService({ email, password }: SignUpFormData) {
  return createUserWithEmailAndPassword(auth, email, password);
}
