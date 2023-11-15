import { forwardRef } from "react";

import {
  Container,
  HorizontalDivider,
  TutorDetails,
  TutorInfo,
  TutorName,
} from "./appointment-request-info-modal-styles";
import { useAppointment } from "../appointment-request/hooks/use-appointment";

import { AppointmentCardPetDetails } from "~/components/appointment-card/components/appointment-card-pet-details/appointment-card-pet-details";
import { Avatar } from "~/components/avatar/avatar";
import { BottomModal } from "~/components/bottom-sheet-modal/bottom-sheet-modal";
import { Button } from "~/components/button/button";
import { PetEntity } from "~/domain/entities/pet-entity";

type Props = {
  handleClosePetInfoModal: () => void;
};

export const AppointmentRequestInfoModal = forwardRef<any, Props>(
  function Modal({ handleClosePetInfoModal }, ref) {
    const {
      appointment,
      handleAcceptAppointmentRequest,
      handleRejectAppointmentRequest,
    } = useAppointment();

    const handleAccept = () => {
      handleClosePetInfoModal();
      handleAcceptAppointmentRequest();
    };

    const handleReject = () => {
      handleClosePetInfoModal();
      handleRejectAppointmentRequest();
    };

    return (
      <BottomModal
        ref={ref}
        BottomSheetModalProps={{
          snapPoints: ["10%", "80%"],
        }}
      >
        <Container>
          <AppointmentCardPetDetails
            pet={appointment?.petDetails as PetEntity}
            variant="request"
          />
          <HorizontalDivider />
          <TutorInfo>Informações do Tutor: </TutorInfo>
          <TutorDetails>
            <Avatar size={50} url={appointment?.tutorDetails?.imageUrl} />
            <TutorName>{appointment?.tutorDetails?.fullName}</TutorName>
          </TutorDetails>
          <Button width="300px" onPress={handleAccept}>
            Aceitar
          </Button>
          <Button variant="tertiary" onPress={handleReject}>
            Rejeitar
          </Button>
        </Container>
      </BottomModal>
    );
  },
);
