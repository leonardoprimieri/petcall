import { CreateUserParams, createUserService } from "@domain/services";
import { useAuthentication } from "@hooks/auth/use-authentication";
import { useNavigationRoutes } from "@hooks/general/use-navigation-routes";
import { useToast } from "@hooks/ui/use-toast";

import { useState } from "react";

export const useCreateUser = () => {
  const { authenticatedUser } = useAuthentication();
  const { handleGoToRegisterVeterinarian } = useNavigationRoutes();

  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const createUser = async ({
    userType,
  }: Pick<CreateUserParams, "userType">) => {
    setIsLoading(true);
    createUserService({
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
    mutationFn: createUser,
    isLoading,
  };
};
