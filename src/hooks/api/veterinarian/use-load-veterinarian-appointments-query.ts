import { useCallback, useEffect, useState } from "react";

import { AppointmentEntity } from "~/domain/entities/appointment-entity";
import { loadVeterinarianAppointmentsService } from "~/domain/services";

export const useLoadVeterinarianAppointmentsQuery = ({
  id,
  loadRejected = false,
}: {
  id: string;
  loadRejected?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentEntity[]>([]);

  const loadVeterinarianAppointments = useCallback(async () => {
    setIsLoading(true);
    if (!id) return;

    const response = await loadVeterinarianAppointmentsService({
      veterinarianId: id,
      loadRejected,
    });
    setAppointments(response);
    setIsLoading(false);
  }, [id, loadRejected]);

  useEffect(() => {
    loadVeterinarianAppointments();
  }, [loadVeterinarianAppointments]);

  return { appointments, isLoading };
};
