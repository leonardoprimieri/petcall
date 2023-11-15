import { ButtonsContainer } from "./pending-appointment-card-styles";
import {
  HeaderText,
  StatusCardContainer,
} from "../../appointment-request-styles";

import { Button } from "~/components/button/button";

type Props = {
  handleOpenPetInfoModal: () => void;
};

export const PendingAppointmentCard = ({ handleOpenPetInfoModal }: Props) => {
  return (
    <StatusCardContainer>
      <HeaderText>Você tem uma nova solicitação de consulta</HeaderText>
      <ButtonsContainer>
        <Button onPress={handleOpenPetInfoModal}>
          Acessar detalhes da solicitação
        </Button>
      </ButtonsContainer>
    </StatusCardContainer>
  );
};
