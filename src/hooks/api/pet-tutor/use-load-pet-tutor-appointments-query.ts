import { useCallback, useEffect, useState } from "react";

import { AppointmentEntity } from "~/domain/entities/appointment-entity";
import { loadTutorAppointmentsService } from "~/domain/services/pet";

export const useLoadPetTutorAppointmentsQuery = (tutorId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentEntity[]>([]);

  const loadTutorAppointments = useCallback(async () => {
    setIsLoading(true);
    if (!tutorId) return;

    const response = await loadTutorAppointmentsService({
      tutorId,
    });
    setAppointments(response);
    setIsLoading(false);
  }, [tutorId]);

  useEffect(() => {
    loadTutorAppointments();
  }, [loadTutorAppointments]);

  return { appointments, isLoading };
};
