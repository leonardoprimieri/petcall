import { useAuthentication } from "@hooks/auth/use-authentication";
import { useToast } from "@hooks/ui/use-toast";
import {
  UpdateVeterinarianParams,
  updateVeterinarianService,
} from "@services/veterinarian/update-veterinarian";

export const useUpdateVeterinarian = () => {
  const { showToast } = useToast();
  const { userDetails } = useAuthentication();

  const updateVeterinarian = async (data: UpdateVeterinarianParams) => {
    await updateVeterinarianService(data, userDetails?.id).catch((e) => {
      showToast({
        message: e,
        title: "Erro",
        type: "error",
      });
    });
  };

  return {
    mutationFn: updateVeterinarian,
  };
};
