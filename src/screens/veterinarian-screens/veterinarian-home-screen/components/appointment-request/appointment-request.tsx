import { AcceptAppointmentCard } from "./components/accept-appointment-card/accept-appointment-card";
import { PendingAppointmentCard } from "./components/pending-appointment-card/pending-appointment-card";
import { useAppointment } from "./hooks/use-appointment";

export const AppointmentRequest = () => {
  const { appointment } = useAppointment();

  const renderAppointmentCard: Record<string, React.ReactElement | null> = {
    accepted: <AcceptAppointmentCard />,
    pending: <PendingAppointmentCard />,
  };

  if (!appointment || appointment.requestStatus === "finished") return null;

  return renderAppointmentCard[appointment.requestStatus];
};
