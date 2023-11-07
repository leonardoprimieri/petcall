import { Image } from "react-native";
import { Container, PetName } from "./pet-card-styles";
import { Avatar } from "~/components/avatar/avatar";
import { PetEntity } from "~/domain/entities/pet-entity";

type Props = {
  pet: PetEntity;
};

export const PetCard = ({ pet }: Props) => {
  return (
    <Container>
      <Avatar size={130} url={pet?.imageUrl} />
      <PetName>{pet?.name}</PetName>
    </Container>
  );
};
