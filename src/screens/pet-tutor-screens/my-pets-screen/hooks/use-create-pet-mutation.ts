import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "~/mappers";
import { CreatePetParams, createPetService } from "~/domain/services/pet";

export const useCreatePetMutation = () => {
  const { showToast } = useToast();

  const execute = async (params: CreatePetParams) => {
    return await createPetService(params).catch((e) => {
      return showToast({
        message: mapFirebaseError(e.code),
        type: "error",
        title: "Erro ao criar pet",
      });
    });
  };

  return { mutationFn: execute };
};
