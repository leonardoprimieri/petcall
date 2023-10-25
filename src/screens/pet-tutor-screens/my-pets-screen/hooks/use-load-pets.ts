import { useCallback, useEffect, useState } from "react";
import { loadPetsService } from "~/domain/services/pet";
import { useAuthentication } from "~/hooks";
import { PetEntity } from "~/domain/entities/pet-entity";

export const useLoadPets = () => {
  const { userDetails } = useAuthentication();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PetEntity[]>([]);

  const loadPets = useCallback(async () => {
    setIsLoading(true);
    if (!userDetails?.id) return;

    const response = await loadPetsService({
      userId: userDetails?.id,
    });
    setData(response);
    setIsLoading(false);
  }, [userDetails?.id]);

  useEffect(() => {
    loadPets();
  }, [loadPets]);

  return { data, isLoading };
};
