import { auth } from "~/config/firebase/firebase-config";
import { signOut } from "firebase/auth";

export function emailLogout() {
  return signOut(auth);
}
