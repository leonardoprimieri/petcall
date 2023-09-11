import { db } from "@config/firebase/firebase-config";
import { UserTypeEnum } from "@enums/user-type.enum";
import { collection, getDocs, query, where } from "firebase/firestore";
import { VeterinarianEntity } from "src/domain/entity/veterinarian-entity";

export const loadVeterinariansService = async () => {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("userType", "==", UserTypeEnum.VETERINARIAN));

  const veterinarians = await getDocs(q).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => doc.data())
  );

  return veterinarians as VeterinarianEntity[];
};
