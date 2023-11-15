import { AcceptAppointmentCard } from "./components/accept-appointment-card/accept-appointment-card";
import { PendingAppointmentCard } from "./components/pending-appointment-card/pending-appointment-card";
import { useAppointment } from "./hooks/use-appointment";

type Props = {
  handleOpenNoteModal: () => void;
  handleOpenPetInfoModal: () => void;
};

export const AppointmentRequest = ({
  handleOpenNoteModal,
  handleOpenPetInfoModal,
}: Props) => {
  const { appointment } = useAppointment();

  const renderAppointmentCard: Record<string, React.ReactElement | null> = {
    accepted: (
      <AcceptAppointmentCard handleOpenNoteModal={handleOpenNoteModal} />
    ),
    pending: (
      <PendingAppointmentCard handleOpenPetInfoModal={handleOpenPetInfoModal} />
    ),
  };

  if (!appointment || appointment.requestStatus === "finished") return null;

  return renderAppointmentCard[appointment.requestStatus];
};
