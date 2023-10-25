import { db } from "~/config/firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { PetEntity } from "~/domain/entities/pet-entity";

type LoadPetsParams = {
  userId?: string;
};

export const loadPetsService = async ({ userId }: LoadPetsParams) => {
  const petsRef = collection(db, "pets");

  const q = query(petsRef, where("userId", "==", userId));

  const pets = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data())
  );

  return pets as PetEntity[];
};
