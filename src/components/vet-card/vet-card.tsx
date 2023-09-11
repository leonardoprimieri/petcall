import { VeterinarianEntity } from "@domain/entity/veterinarian-entity";
import {
  Container,
  FirstContainer,
  Text,
  VetAvailableDays,
  VetAvatar,
  VetInfo,
  VetName,
  VetPricePerHour,
  VetSchedule,
} from "./vet-card-styles";
import { formatCurrency } from "@helpers/format-currency";
import { formatSelectedDays } from "@helpers/format-selected-days";
import { Avatar } from "@components/avatar/avatar";

type Props = {
  veterinary: VeterinarianEntity;
};

export const VetCard = ({ veterinary }: Props) => {
  return (
    <Container>
      <FirstContainer>
        <VetAvatar>
          <Avatar />
        </VetAvatar>
        <VetInfo>
          <VetName>{veterinary?.fullName}</VetName>
          <VetPricePerHour>
            {formatCurrency(veterinary?.appointmentPrice)}
          </VetPricePerHour>
          <Text>por consulta</Text>
        </VetInfo>
      </FirstContainer>
      <VetSchedule>
        <Text>Atende</Text>
        <VetAvailableDays>
          {formatSelectedDays(veterinary?.daysAvailable)}
        </VetAvailableDays>
      </VetSchedule>
    </Container>
  );
};
