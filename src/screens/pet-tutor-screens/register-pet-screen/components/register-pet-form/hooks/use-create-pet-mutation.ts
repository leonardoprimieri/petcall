import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "~/mappers";
import { CreatePetParams, createPetService } from "~/domain/services/pet";
import { useAuthentication } from "~/hooks";

export const useCreatePetMutation = () => {
  const { showToast } = useToast();
  const { userDetails } = useAuthentication();

  const execute = async (params: CreatePetParams) => {
    await createPetService({
      userId: userDetails?.id,
      ...params,
    }).catch((e) => {
      showToast({
        message: mapFirebaseError(e.code),
        type: "error",
        title: "Erro ao criar pet",
      });
    });
  };

  return { mutationFn: execute };
};
