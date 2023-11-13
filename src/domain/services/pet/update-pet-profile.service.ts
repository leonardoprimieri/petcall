import { doc, updateDoc } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { PetEntity } from "~/domain/entities/pet-entity";

export type UpdateUserParams = {
  petId: string;
  data: Partial<PetEntity>;
};

export const updatePetProfile = async ({ data, petId }: UpdateUserParams) => {
  const petRef = doc(db, "pets", petId);

  await updateDoc(petRef, data);
};
