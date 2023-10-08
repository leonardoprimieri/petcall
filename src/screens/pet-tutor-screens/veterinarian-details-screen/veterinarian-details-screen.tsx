import {
  ButtonContainer,
  Container,
  GridDescription,
  GridDetails,
  GridItem,
  GridTitle,
  HeaderContainer,
  VeterinarianName,
} from "./veterinarian-details-screen-styles";
import { Avatar } from "~/components/avatar/avatar";
import { IconButton } from "~/components/icon-button/icon-button";
import { ArrowLeftIcon } from "~/components/icons";
import { useTheme } from "styled-components/native";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { useNavigation } from "@react-navigation/native";
import { VeterinarianEntity } from "~/domain/entity/veterinarian-entity";

import { formatCurrency } from "~/helpers/format-currency";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "~/components/button/button";

export function VeterinarianDetailsScreen({
  route,
}: {
  route: {
    params: {
      veterinarian: VeterinarianEntity;
    };
  };
}) {
  const { veterinarian } = route.params;
  const methods = useForm({
    values: {
      daysAvailable: veterinarian.daysAvailable,
    },
  });
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  return (
    <DefaultLayout>
      <Container>
        <HeaderContainer>
          <IconButton onPress={goBack}>
            <ArrowLeftIcon color={COLORS.PRIMARY} weight="bold" />
          </IconButton>
        </HeaderContainer>
        <Avatar
          style={{
            width: 110,
            height: 110,
          }}
        />
        <VeterinarianName>{veterinarian.fullName}</VeterinarianName>
        <GridDetails>
          <GridItem>
            <GridTitle>547</GridTitle>
            <GridDescription>Consultas feitas</GridDescription>
          </GridItem>
          <GridItem>
            <GridTitle>4.5</GridTitle>
            <GridDescription>Reputação</GridDescription>
          </GridItem>
          <GridItem>
            <GridTitle>
              {formatCurrency(veterinarian.appointmentPrice)}
            </GridTitle>
            <GridDescription>Por consulta</GridDescription>
          </GridItem>
        </GridDetails>

        <FormProvider {...methods}>
          <WeekDaySelector disabled />
        </FormProvider>

        <ButtonContainer>
          <Button>Solicitar consulta</Button>
        </ButtonContainer>
      </Container>
    </DefaultLayout>
  );
}
