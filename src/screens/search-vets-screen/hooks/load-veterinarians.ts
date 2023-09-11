import { loadVeterinariansService } from "@domain/services";
import { useCallback, useEffect, useState } from "react";
import { VeterinarianEntity } from "src/domain/entity/veterinarian-entity";

export const useLoadVeterinarians = () => {
  const [data, setData] = useState<VeterinarianEntity[]>([]);

  const loadVeterinarians = useCallback(async () => {
    const response = await loadVeterinariansService();
    setData(response);
  }, []);

  useEffect(() => {
    loadVeterinarians();
  }, [loadVeterinarians]);

  return { data };
};
