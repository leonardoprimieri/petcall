import {
  CreatePetParams,
  createPetService,
  updatePetProfile,
} from "~/domain/services/pet";
import { useAuthentication } from "~/hooks";
import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "~/mappers";

export const useCreatePetMutation = () => {
  const { showToast } = useToast();
  const { userDetails } = useAuthentication();

  const execute = async (params: CreatePetParams) => {
    await createPetService({
      userId: userDetails?.id,
      ...params,
    })
      .then((pet) => {
        updatePetProfile({
          petId: pet.id,
          data: {
            id: pet.id,
          },
        });
      })
      .catch((e) => {
        showToast({
          message: mapFirebaseError(e.code),
          type: "error",
          title: "Erro ao criar pet",
        });
      });
  };

  return { mutationFn: execute };
};
