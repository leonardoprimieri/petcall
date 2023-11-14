import { useCallback, useEffect, useState } from "react";

import { ClinicEntity } from "~/domain/entities/clinic-entity";
import { loadClinicsService } from "~/domain/services/clinic/load-clinics.service";

export const useLoadClinicsQuery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clinics, setClinics] = useState<ClinicEntity[]>([]);

  const loadClinics = useCallback(async () => {
    setIsLoading(true);

    const response = await loadClinicsService();
    setClinics(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadClinics();
  }, [loadClinics]);

  return { clinics, isLoading };
};
