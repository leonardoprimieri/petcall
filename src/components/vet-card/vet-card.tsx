import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import {
  Container,
  FirstContainer,
  Text,
  VetAvailableDays,
  VetInfo,
  VetName,
  VetPricePerHour,
  VetSchedule,
} from "./vet-card-styles";
import { formatCurrency } from "~/helpers/format-currency";
import { formatSelectedDays } from "~/helpers/format-selected-days";
import { Avatar } from "~/components/avatar/avatar";
import { useNavigationRoutes } from "~/hooks";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const VetCard = ({ veterinarian }: Props) => {
  const { handleGoToVeterinarianDetails } = useNavigationRoutes();

  const handleGoToDetails = () => {
    handleGoToVeterinarianDetails(veterinarian);
  };

  return (
    <Container onPress={handleGoToDetails}>
      <FirstContainer>
        <Avatar
          style={{
            height: 80,
            width: 80,
          }}
        />
        <VetInfo>
          <VetName>{veterinarian?.fullName}</VetName>
          <VetPricePerHour>
            {formatCurrency(veterinarian?.appointmentPrice)}
          </VetPricePerHour>
          <Text>por consulta</Text>
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
