import { useTheme } from "styled-components/native";

import {
  ButtonContainer,
  Container,
  PetDetail,
  PetInfo,
  PetInfoFooter,
  PetName,
} from "./pet-card-styles";

import { Separator } from "~/components/appointment-card/appointment-card-styles";
import { Avatar } from "~/components/avatar/avatar";
import { IconButton } from "~/components/icon-button/icon-button";
import { EditIcon, XIcon } from "~/components/icons";
import { PetEntity } from "~/domain/entities/pet-entity";
import { deletePetService } from "~/domain/services/pet";
import { useNavigationRoutes, useToast } from "~/hooks";

type Props = {
  pet: PetEntity;
};

export const PetCard = ({ pet }: Props) => {
  const { showToast } = useToast();
  const { COLORS } = useTheme();
  const { handleGoToEditPet, handleGoToPetTutorHomeScreen } =
    useNavigationRoutes();

  const handleDeletePet = async () => {
    await deletePetService({
      id: pet.id as string,
    }).then(() => {
      showToast({
        message: "Pet deletado com sucesso!",
        title: "Sucesso",
        type: "success",
      });
      handleGoToPetTutorHomeScreen();
    });
  };

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
      <ButtonContainer>
        <IconButton
          onPress={() => {
            handleGoToEditPet(pet);
          }}
        >
          <EditIcon color={COLORS.PRIMARY} />
        </IconButton>
        <IconButton onPress={handleDeletePet}>
          <XIcon color={COLORS.PRIMARY} />
        </IconButton>
      </ButtonContainer>
    </Container>
  );
};
