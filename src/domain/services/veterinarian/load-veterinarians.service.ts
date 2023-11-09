import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "~/config/firebase/firebase-config";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { UserTypeEnum } from "~/enums/user-type.enum";

export const loadVeterinariansService = async () => {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("userType", "==", UserTypeEnum.VETERINARIAN));

  const veterinarians = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data()),
  );

  return veterinarians as VeterinarianEntity[];
};
