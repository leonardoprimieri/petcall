import { CreateUserParams, createUserService } from "~/domain/services";
import { useToast } from "~/hooks/ui/use-toast";

import { useState } from "react";

export const useCreateUserMutation = () => {
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const execute = async <T>({ userId, ...data }: CreateUserParams<T>) => {
    setIsLoading(true);
    createUserService({ userId, ...data })
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
