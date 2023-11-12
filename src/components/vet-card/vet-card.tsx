import {
  Container,
  FirstContainer,
  Text,
  VetAvailableDays,
  VetInfo,
  VetName,
  VetPricePerHour,
  VetSchedule,
  VoluntaryLabel,
} from "./vet-card-styles";

import { Avatar } from "~/components/avatar/avatar";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { formatCurrency } from "~/helpers/format-currency";
import { formatSelectedDays } from "~/helpers/format-selected-days";
import { handleIsVeterinarianVoluntary } from "~/helpers/handle-is-veterinarian-voluntary";
import { useNavigationRoutes } from "~/hooks";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const VetCard = ({ veterinarian }: Props) => {
  const { handleGoToVeterinarianDetails } = useNavigationRoutes();

  const handleGoToDetails = () => {
    handleGoToVeterinarianDetails(veterinarian);
  };

  const { isVoluntary, voluntaryLabel } = handleIsVeterinarianVoluntary({
    veterinarian,
  });

  const renderAppointmentPriceLabel = () => {
    if (isVoluntary) return <VoluntaryLabel>{voluntaryLabel}</VoluntaryLabel>;

    return (
      <VetPricePerHour>
        {formatCurrency(veterinarian?.appointmentPrice)}
      </VetPricePerHour>
    );
  };

  return (
    <Container onPress={handleGoToDetails}>
      <FirstContainer>
        <Avatar size={80} url={veterinarian?.imageUrl} />
        <VetInfo>
          <VetName>{veterinarian?.fullName}</VetName>
          {renderAppointmentPriceLabel()}
          {!isVoluntary && <Text>por consulta</Text>}
        </VetInfo>
      </FirstContainer>
      <VetSchedule>
        <Text>Atende</Text>
        <VetAvailableDays>
          {formatSelectedDays(veterinarian?.daysAvailable)}
        </VetAvailableDays>
      </VetSchedule>
    </Container>
  );
};
