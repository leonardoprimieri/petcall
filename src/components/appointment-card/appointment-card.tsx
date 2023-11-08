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
import { formatCurrency } from "~/helpers/format-currency";
import { Avatar } from "../avatar/avatar";
import { formatDate } from "~/helpers/format-date";

type Props = {
  finishedAt: Date;
  imageUrl: string;
  fullName: string;
  appointmentPrice: number;
};

export const AppointmentCard = ({
  appointmentPrice,
  finishedAt,
  fullName,
  imageUrl,
}: Props) => {
  const formattedFinishedAt = formatDate(new Date(finishedAt as Date));

  return (
    <Container>
      <Avatar size={55} url={imageUrl} />
      <CardTextContainer>
        <CardTitle>{fullName}</CardTitle>
        <DescriptionContainer>
          <Description>{formattedFinishedAt}</Description>
          <Separator />
          <CurrencyContainer>
            <CurrencyDescription>
              {formatCurrency(appointmentPrice)}
            </CurrencyDescription>
          </CurrencyContainer>
        </DescriptionContainer>
      </CardTextContainer>
    </Container>
  );
};
