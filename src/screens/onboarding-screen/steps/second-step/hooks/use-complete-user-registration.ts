import {
  CreateUserParams,
  completeUserRegistrationService,
} from "~/domain/services";
import { useToast } from "~/hooks/ui/use-toast";

import { useState } from "react";

export const useCompleteUserRegistration = () => {
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const execute = async ({ userId, ...data }: CreateUserParams) => {
    setIsLoading(true);
    completeUserRegistrationService({ userId, ...data })
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
    mutationFn: execute,
    isLoading,
  };
};
