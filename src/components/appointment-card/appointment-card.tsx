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
  Separator,
} from "./appointment-card-styles";
import { Avatar } from "../avatar/avatar";
import { Divider } from "../divider/divider";

import { formatCurrency } from "~/helpers/format-currency";
import { formatDate } from "~/helpers/format-date";

type Props = {
  finishedAt: Date;
  imageUrl: string;
  fullName: string;
  appointmentPrice: number;
  CollapseContent?: React.ReactNode;
};

export const AppointmentCard = ({
  appointmentPrice,
  finishedAt,
  fullName,
  imageUrl,
  CollapseContent,
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
                {formatCurrency(appointmentPrice)}
              </CurrencyDescription>
            </CurrencyContainer>
          </DescriptionContainer>
        </CardTextContainer>
      </InfoContainer>
      {openCollapse && CollapseContent && (
        <>
          <Divider />
          <CollapseContainer>{CollapseContent}</CollapseContainer>
        </>
      )}
    </Container>
  );
};
