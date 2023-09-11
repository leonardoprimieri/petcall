import {
  CreateUserParams,
  completeUserRegistrationService,
} from "@domain/services";
import { useAuthentication } from "@hooks/auth/use-authentication";
import { useNavigationRoutes } from "@hooks/general/use-navigation-routes";
import { useToast } from "@hooks/ui/use-toast";

import { useState } from "react";

export const useCompleteUserRegistration = () => {
  const { authenticatedUser } = useAuthentication();
  const { handleGoToRegisterVeterinarian } = useNavigationRoutes();

  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const execute = async ({ userType }: Pick<CreateUserParams, "userType">) => {
    setIsLoading(true);
    completeUserRegistrationService({
      userType,
      userId: authenticatedUser?.uid,
    })
      .catch((e) => {
        showToast({
          message: e.message,
          title: "Erro ao criar usuário",
          type: "error",
        });
      })
      .then(() => {
        if (userType === "VETERINARIAN") {
          handleGoToRegisterVeterinarian();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    mutationFn: execute,
    isLoading,
  };
};
