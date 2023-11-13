import {
  Container,
  PetDetail,
  PetInfo,
  PetInfoFooter,
  PetName,
} from "./pet-card-styles";

import { Separator } from "~/components/appointment-card/appointment-card-styles";
import { Avatar } from "~/components/avatar/avatar";
import { PetEntity } from "~/domain/entities/pet-entity";

type Props = {
  pet: PetEntity;
};

export const PetCard = ({ pet }: Props) => {
  return (
    <Container>
      <Avatar size={85} url={pet?.imageUrl} />
      <PetInfo>
        <PetName>{pet?.name}</PetName>
        <PetInfoFooter>
          <PetDetail>{pet?.birthday}</PetDetail>
          <Separator />
          <PetDetail>{pet?.weight}Kg</PetDetail>
        </PetInfoFooter>
      </PetInfo>
    </Container>
  );
};
