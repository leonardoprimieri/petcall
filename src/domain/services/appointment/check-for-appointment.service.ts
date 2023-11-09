import { ref, onValue } from "firebase/database";

import { realTimeDb } from "~/config/firebase/firebase-config";

type ReceiveAppointmentParams = {
  veterinarianId: string;
  callback: (data: any) => void;
};

export const checkForAppointmentService = ({
  veterinarianId,
  callback,
}: ReceiveAppointmentParams) => {
  const appointmentRef = ref(
    realTimeDb,
    "appointment-requests/" + veterinarianId,
  );

  onValue(appointmentRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
