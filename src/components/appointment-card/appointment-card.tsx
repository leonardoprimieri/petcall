import { AppointmentEntity } from "~/domain/entities/appointment-entity";
import {
  CardTextContainer,
  CardTitle,
  Container,
  CurrencyContainer,
  CurrencyDescription,
  Description,
  DescriptionContainer,
  Separator,
} from "./appointment-card-styles";
import { CalendarIcon } from "../icons";
import { formatCurrency } from "~/helpers/format-currency";
import { useTheme } from "styled-components/native";
import { Avatar } from "../avatar/avatar";

type Props = {
  appointment: AppointmentEntity;
};

export const AppointmentCard = ({ appointment }: Props) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Avatar size={55} url={appointment?.veterinarianDetails?.imageUrl} />
      <CardTextContainer>
        <CardTitle>{appointment?.veterinarianDetails?.fullName}</CardTitle>
        <DescriptionContainer>
          <CalendarIcon color={COLORS.PRIMARY} />
          <Description>{appointment?.finishedAt}</Description>
          <Separator />
          <CurrencyContainer>
            <CurrencyDescription>
              {formatCurrency(
                appointment?.veterinarianDetails?.appointmentPrice
              )}
            </CurrencyDescription>
          </CurrencyContainer>
        </DescriptionContainer>
      </CardTextContainer>
    </Container>
  );
};
