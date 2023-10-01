import { useToast } from "~/hooks/ui/use-toast";
import { mapFirebaseError } from "../../../../mappers/map-firebase-error";
import { emailLogin } from "~/domain/services";

type EmailLoginParams = {
  email: string;
  password: string;
};

export const useEmailLogin = () => {
  const { showToast } = useToast();

  const login = async (params: EmailLoginParams) => {
    await emailLogin(params).catch((e) => {
      return showToast({
        message: mapFirebaseError(e.code),
        type: "error",
        title: "Erro ao fazer login",
      });
    });
  };

  return { mutationFn: login };
};
