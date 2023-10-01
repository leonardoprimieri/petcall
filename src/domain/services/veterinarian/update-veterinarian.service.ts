import { db } from "~/config/firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { VeterinarianEntity } from "src/domain/entity/veterinarian-entity";
import { UserTypeEnum } from "~/enums/user-type.enum";

export type UpdateVeterinarianParams = VeterinarianEntity;

export const updateVeterinarianService = async (
  data: UpdateVeterinarianParams,
  userId: string
) => {
  const user = doc(db, "users", userId);

  const result = await updateDoc(user, {
    ...data,
    userType: UserTypeEnum.VETERINARIAN,
  });

  return result;
};
