import { useCallback, useEffect, useState } from "react";

import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { loadVeterinariansService } from "~/domain/services";

export const useLoadVeterinarians = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<VeterinarianEntity[]>([]);

  const loadVeterinarians = useCallback(async () => {
    setIsLoading(true);
    const response = await loadVeterinariansService();
    setData(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadVeterinarians();
  }, [loadVeterinarians]);

  return { data, isLoading };
};
