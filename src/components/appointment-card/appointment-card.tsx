import { useState } from "react";

import {
  CardTextContainer,
  CardTitle,
  CollapseContainer,
  Container,
  CurrencyContainer,
  CurrencyDescription,
  Description,
  DescriptionContainer,
  InfoContainer,
  RejectedLabel,
  Separator,
} from "./appointment-card-styles";
import { AppointmentCardPetDetails } from "./components/appointment-card-pet-details/appointment-card-pet-details";
import { Avatar } from "../avatar/avatar";
import { Divider } from "../divider/divider";

import { PetEntity } from "~/domain/entities/pet-entity";
import { formatCurrency } from "~/helpers/format-currency";
import { formatDate } from "~/helpers/format-date";

type Props = {
  finishedAt: Date;
  imageUrl: string;
  fullName: string;
  appointmentPrice: number;
  CollapseContent?: React.ReactNode;
  wasRejected: boolean;
  petDetails: PetEntity;
};

export const AppointmentCard = ({
  appointmentPrice,
  finishedAt,
  fullName,
  imageUrl,
  CollapseContent,
  wasRejected,
  petDetails,
}: Props) => {
  const formattedFinishedAt = formatDate(new Date(finishedAt as Date));

  const [openCollapse, setOpenCollapse] = useState(false);

  const toggleCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <Container onPress={toggleCollapse}>
      <InfoContainer>
        <Avatar size={55} url={imageUrl} />
        <CardTextContainer>
          <CardTitle>{fullName}</CardTitle>
          <DescriptionContainer>
            <Description>{formattedFinishedAt}</Description>
            <Separator />
            <CurrencyContainer>
              <CurrencyDescription>
                {!wasRejected ? formatCurrency(appointmentPrice) : "R$ 0,00"}
              </CurrencyDescription>
            </CurrencyContainer>
          </DescriptionContainer>
          {wasRejected && <RejectedLabel>Consulta rejeitada</RejectedLabel>}
        </CardTextContainer>
      </InfoContainer>
      {openCollapse && (
        <>
          <Divider />
          <CollapseContainer>
            <AppointmentCardPetDetails pet={petDetails} />
            {CollapseContent}
          </CollapseContainer>
        </>
      )}
    </Container>
  );
};
