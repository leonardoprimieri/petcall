import { useEffect, useState } from "react";
import { AppointmentEntity } from "~/domain/entities/appointment-entity";
import { checkForAppointmentService } from "~/domain/services/appointment";

type Args = {
  veterinarianId: string;
};

export const useCheckForAppointments = ({ veterinarianId }: Args) => {
  const [appointment, setAppointment] = useState<AppointmentEntity | null>(
    null
  );

  useEffect(() => {
    checkForAppointmentService({
      veterinarianId,
      callback: setAppointment,
    });
  }, [veterinarianId]);

  return { appointment };
};
