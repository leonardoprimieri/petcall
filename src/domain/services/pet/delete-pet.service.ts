import { deleteDoc, doc } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";

export type DeletePetParams = {
  id: string;
};

export const deletePetService = async ({ id }: DeletePetParams) => {
  await deleteDoc(doc(db, "pets", id));
};
