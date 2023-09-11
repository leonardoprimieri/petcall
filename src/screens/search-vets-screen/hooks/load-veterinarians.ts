import { loadVeterinariansService } from "@domain/services";
import { useCallback, useEffect, useState } from "react";
import { VeterinarianEntity } from "src/domain/entity/veterinarian-entity";

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
