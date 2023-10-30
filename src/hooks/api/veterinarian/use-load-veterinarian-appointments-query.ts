import { useCallback, useEffect, useState } from "react";
import { AppointmentEntity } from "~/domain/entities/appointment-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { loadVeterinarianAppointmentsService } from "~/domain/services";

export const useLoadVeterinarianAppointmentsQuery = (
  veterinarian: VeterinarianEntity
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentEntity[]>([]);

  const loadVeterinarianAppointments = useCallback(async () => {
    setIsLoading(true);
    if (!veterinarian?.userId) return;

    const response = await loadVeterinarianAppointmentsService({
      veterinarianId: veterinarian?.userId,
    });
    setAppointments(response);
    setIsLoading(false);
  }, [veterinarian?.userId]);

  useEffect(() => {
    loadVeterinarianAppointments();
  }, [loadVeterinarianAppointments]);

  return { appointments, isLoading };
};
