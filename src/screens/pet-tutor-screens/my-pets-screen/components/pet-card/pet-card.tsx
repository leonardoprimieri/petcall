import { Container, PetName } from "./pet-card-styles";
import { Avatar } from "~/components/avatar/avatar";
import { PetEntity } from "~/domain/entities/pet-entity";

type Props = {
  pet: PetEntity;
};

export const PetCard = ({ pet }: Props) => {
  return (
    <Container>
      <Avatar
        style={{
          height: 70,
          width: 70,
        }}
      />
      <PetName>{pet?.name}</PetName>
    </Container>
  );
};
