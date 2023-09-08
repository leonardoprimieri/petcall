import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@config/firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

export function useAuthentication() {
  const [user, setUser] = useState<
    User & {
      id?: string;
    }
  >();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user ?? undefined);
      }
    );

    const q = query(collection(db, "users"), where("userId", "==", user?.uid));

    const data = getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });

    console.log(data);

    // setUser((old) => ({
    //   ...old,
    //   id: data,
    // }));

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}
