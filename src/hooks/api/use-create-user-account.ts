import { useToast } from "~/hooks/ui/use-toast";
import { createEmailAccountService } from "~/domain/services";
import { mapFirebaseError } from "~/mappers";
import { SignUpFormData } from "~/screens/user-screens/sign-up-screen/validation/sign-up-form-validation";

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
