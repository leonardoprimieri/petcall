import {
  UpdateVeterinarianParams,
  updateVeterinarianService,
} from "~/domain/services";
import { useNavigationRoutes } from "~/hooks/general/use-navigation-routes";
import { useToast } from "~/hooks/ui/use-toast";

export const useUpdateVeterinarian = () => {
  const { showToast } = useToast();

  const { handleGoToVeterinarianScreen } = useNavigationRoutes();

  const updateVeterinarian = async (
    data: UpdateVeterinarianParams,
    userId: string
  ) => {
    await updateVeterinarianService(data, userId)
      .then(handleGoToVeterinarianScreen)
      .catch((e) => {
        showToast({
          message: e,
          title: "Ops, algo deu errado!",
          type: "error",
        });
      });
  };

  return {
    mutationFn: updateVeterinarian,
  };
};
