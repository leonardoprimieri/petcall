import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@config/firebase/firebase-config";

export function useAuthentication() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) =>
      setUser(user ?? undefined)
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}
