import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "../../../mappers/map-firebase-error";
import {
  CreateEmailAccountParams,
  createEmailAccountService,
} from "~/domain/services";

export const useCreateUserAccount = () => {
  const { showToast } = useToast();

  const execute = async (params: CreateEmailAccountParams) => {
    return await createEmailAccountService(params).catch((e) => {
      return showToast({
        message: mapFirebaseError(e.code),
        type: "error",
        title: "Erro ao criar conta",
      });
    });
  };

  return { mutationFn: execute };
};
