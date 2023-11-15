import { Image } from "react-native";

import {
  Bold,
  Container,
  PetDetailsContainer,
  PetDetailsWrapper,
  PetInfo,
  PetName,
  PetNotes,
  PetNotesTitle,
} from "./appointment-card-pet-details-styles";

import { PetEntity } from "~/domain/entities/pet-entity";
import { mapPetType } from "~/mappers/map-pet-type";

type Props = {
  pet: PetEntity;
  variant?: "request" | "details";
  note?: string;
};

export const AppointmentCardPetDetails = ({
  pet,
  note,
  variant = "details",
}: Props) => {
  const isRequestVariant = variant === "request";

  return (
    <Container>
      <PetNotesTitle>Informações do Pet:</PetNotesTitle>

      <PetDetailsWrapper>
        <Image
          source={{
            uri: pet?.imageUrl,
            width: isRequestVariant ? 300 : 300,
            height: isRequestVariant ? 100 : 150,
          }}
          style={{
            borderRadius: 8,
          }}
        />
      </PetDetailsWrapper>

      <PetDetailsContainer>
        <PetName isRequestVariant={isRequestVariant}>{pet?.name}</PetName>
        <PetInfo isRequestVariant={isRequestVariant}>
          <Bold>Peso:</Bold> {pet?.weight} Kg
        </PetInfo>
        <PetInfo isRequestVariant={isRequestVariant}>
          <Bold>Aniversário</Bold> {pet?.birthday}
        </PetInfo>
        <PetInfo isRequestVariant={isRequestVariant}>
          <Bold>Tipo:</Bold> {mapPetType(pet?.type)}
        </PetInfo>
        <PetInfo isRequestVariant={isRequestVariant}>
          <Bold>Raça:</Bold> {pet?.brand}
        </PetInfo>
      </PetDetailsContainer>

      {!isRequestVariant && (
        <>
          <PetNotesTitle>Observações pós consulta:</PetNotesTitle>
          <PetNotes>{note}</PetNotes>
        </>
      )}
    </Container>
  );
};
