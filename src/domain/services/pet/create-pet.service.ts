import { db } from "~/config/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { PetEntity } from "~/domain/entities/pet-entity";

export type CreatePetParams = PetEntity;

export const createPetService = async (data: CreatePetParams) => {
  const collectionRef = collection(db, "pets");

  const result = await addDoc(collectionRef, data);

  return result;
};
