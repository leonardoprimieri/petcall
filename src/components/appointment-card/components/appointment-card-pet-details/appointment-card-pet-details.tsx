import { View } from "react-native";

import {
  Container,
  PetBirthDate,
  PetDetailsContainer,
  PetDetailsWrapper,
  PetInfoContainer,
  PetName,
  PetNotes,
  PetNotesTitle,
  PetWeight,
} from "./appointment-card-pet-details-styles";
import { Separator } from "../../appointment-card-styles";

import { Avatar } from "~/components/avatar/avatar";
import { PetEntity } from "~/domain/entities/pet-entity";

type Props = {
  pet: PetEntity;
  note?: string;
};

export const AppointmentCardPetDetails = ({ pet, note }: Props) => {
  return (
    <Container>
      <PetDetailsWrapper>
        <View>
          <Avatar size={55} url={pet?.imageUrl} removeBorder />
        </View>
        <PetDetailsContainer>
          <PetName>{pet?.name}</PetName>
          <PetInfoContainer>
            <PetWeight>{pet?.weight} Kg</PetWeight>
            <Separator />
            <PetBirthDate>{pet?.birthday}</PetBirthDate>
          </PetInfoContainer>
        </PetDetailsContainer>
      </PetDetailsWrapper>

      <PetNotesTitle>Observações pós consulta:</PetNotesTitle>

      <PetNotes>{note}</PetNotes>
    </Container>
  );
};
