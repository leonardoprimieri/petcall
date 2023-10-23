import { loadVeterinariansService } from "~/domain/services";
import { useCallback, useEffect, useState } from "react";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { loadPetsService } from "~/domain/services/pet";
import { useAuthentication } from "~/hooks";

export const useLoadPets = () => {
  const { userDetails } = useAuthentication();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<VeterinarianEntity[]>([]);

  const loadPets = useCallback(async () => {
    setIsLoading(true);

    const response = await loadPetsService({
      userId: userDetails?.userId,
    });
    setData(response);
    setIsLoading(false);
  }, [userDetails?.userId]);

  useEffect(() => {
    loadPets();
  }, [loadPets]);

  return { data, isLoading };
};
