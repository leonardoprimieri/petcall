import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "../../../mappers/map-firebase-error";
import {
  CreateEmailAccountParams,
  createEmailAccountService,
} from "~/domain/services";
import { useNavigationRoutes } from "~/hooks/general/use-navigation-routes";

export const useCreateUserAccount = () => {
  const { handleGoToOnboarding } = useNavigationRoutes();

  const { showToast } = useToast();

  const execute = async (params: CreateEmailAccountParams) => {
    await createEmailAccountService(params)
      .then(handleGoToOnboarding)
      .catch((e) => {
        return showToast({
          message: mapFirebaseError(e.code),
          type: "error",
          title: "Erro ao criar conta",
        });
      });
  };

  return { mutationFn: execute };
};
