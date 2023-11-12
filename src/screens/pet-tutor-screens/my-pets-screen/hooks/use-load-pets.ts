import { useCallback, useEffect, useState } from "react";

import { PetEntity } from "~/domain/entities/pet-entity";
import { loadPetsService } from "~/domain/services/pet";
import { useAuthentication } from "~/hooks";

type Props = {
  refetch?: boolean;
};

export const useLoadPets = (
  { refetch }: Props = {
    refetch: false,
  }
) => {
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
  }, [userDetails?.id, refetch]);

  useEffect(() => {
    loadPets();
  }, [loadPets]);

  return { pets: data, isLoading };
};
