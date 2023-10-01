import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "../../../mappers/map-firebase-error";
import { createEmailAccountService } from "~/domain/services";
import { SignUpFormData } from "../validation/sign-up-form-validation";

export const useCreateUserAccount = () => {
  const { showToast } = useToast();

  const execute = async (params: SignUpFormData) => {
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
