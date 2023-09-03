import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase/firebase-config";

export function emailLogout() {
  return signOut(auth);
}
