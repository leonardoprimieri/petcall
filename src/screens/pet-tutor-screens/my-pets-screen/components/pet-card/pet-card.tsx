import {
  Container,
  FirstContainer,
  Text,
  PetInfo,
  PetName,
} from "./pet-card-styles";
import { Avatar } from "~/components/avatar/avatar";
import { PetEntity } from "~/domain/entities/pet-entity";

type Props = {
  pet: PetEntity;
};

export const PetCard = ({ pet }: Props) => {
  return (
    <Container>
      <FirstContainer>
        <Avatar
          style={{
            height: 80,
            width: 80,
          }}
        />
        <PetInfo>
          <PetName>{pet?.name}</PetName>
          <Text>Peso</Text>
          <Text>{pet?.weight}</Text>
        </PetInfo>
      </FirstContainer>
    </Container>
  );
};
