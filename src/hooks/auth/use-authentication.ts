import { onAuthStateChanged, User } from "firebase/auth";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { auth, db } from "~/config/firebase/firebase-config";

export function useAuthentication() {
  const [userDetails, setUserDetails] = useState<DocumentData | null>();
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) return logout();
        setAuthenticatedUser(user);

        const q = query(
          collection(db, "users"),
          where("userId", "==", user?.uid),
        );

        const userDetails = await getDocs(q).then(
          (querySnapshot) => querySnapshot.docs[0],
        );

        setUserDetails({
          ...userDetails?.data(),
          id: userDetails?.id,
        });
      },
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  const logout = () => {
    auth.signOut().then(() => {
      setAuthenticatedUser(null);
      setUserDetails(null);
    });
  };

  return {
    authenticatedUser,
    userDetails,
    logout,
    setUserDetails,
  };
}
