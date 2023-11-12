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
};

export const AppointmentCardPetDetails = ({ pet }: Props) => {
  return (
    <Container>
      <PetDetailsWrapper>
        <View>
          <Avatar size={55} url={pet?.imageUrl} removeBorder />
        </View>
        <PetDetailsContainer>
          <PetName>{pet?.name}</PetName>
          <PetInfoContainer>
            <PetWeight>{pet?.weight}</PetWeight>
            <Separator />
            <PetBirthDate>{pet?.birthday}</PetBirthDate>
          </PetInfoContainer>
        </PetDetailsContainer>
      </PetDetailsWrapper>

      <PetNotesTitle>Observações pós consulta:</PetNotesTitle>

      <PetNotes>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
        accusamus magnam ex est architecto eos amet eaque atque mollitia, dicta
        eligendi aliquam quisquam aperiam dolore, delectus soluta aut minima
        dignissimos!
      </PetNotes>
    </Container>
  );
};
