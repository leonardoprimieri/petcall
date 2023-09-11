import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@config/firebase/firebase-config";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export function useAuthentication() {
  const [userDetails, setUserDetails] = useState<DocumentData>();
  const [authenticatedUser, setAuthenticatedUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      async (user) => {
        setAuthenticatedUser(user ?? undefined);
        const q = query(
          collection(db, "users"),
          where("userId", "==", user?.uid)
        );

        const userDetails = await getDocs(q).then(
          (querySnapshot) => querySnapshot.docs[0]
        );

        setUserDetails({
          ...userDetails?.data(),
          id: userDetails?.id,
        });
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    authenticatedUser,
    userDetails,
  };
}
