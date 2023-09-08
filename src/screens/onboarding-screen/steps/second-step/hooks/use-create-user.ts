import { useAuthentication } from "@hooks/auth/use-authentication";
import { useToast } from "@hooks/ui/use-toast";
import {
  CreateUserParams,
  createUserService,
} from "@services/user/create-user";
import { useState } from "react";

export const useCreateUser = () => {
  const { user } = useAuthentication();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const createUser = async ({
    userType,
  }: Pick<CreateUserParams, "userType">) => {
    setIsLoading(true);
    createUserService({
      userType,
      fullName: user?.displayName ?? "",
      userId: user?.uid,
    })
      .catch((e) => {
        showToast({
          message: e.message,
          title: "Erro ao criar usuário",
          type: "error",
        });
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
