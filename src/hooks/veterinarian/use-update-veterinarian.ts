import {
  UpdateVeterinarianParams,
  updateVeterinarianService,
} from "@services/veterinarian/update-veterinarian";

export const useUpdateVeterinarian = () => {
  const updateVeterinarian = async (data: UpdateVeterinarianParams) => {
    await updateVeterinarianService(data);
  };

  return {
    mutationFn: updateVeterinarian,
  };
};
