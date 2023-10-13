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
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

import { formatCurrency } from "~/helpers/format-currency";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "~/components/button/button";
import { requestAppointmentService } from "~/domain/services/veterinarian/request-appointment.service";
import { useAuthentication, useCheckForAppointments } from "~/hooks";
import { Text } from "react-native";

type RouteParams = {
  route: {
    params: {
      veterinarian: VeterinarianEntity;
    };
  };
};

export function VeterinarianDetailsScreen({ route }: RouteParams) {
  const { veterinarian } = route.params;
  const { userDetails } = useAuthentication();

  const { appointment } = useCheckForAppointments({
    veterinarianId: veterinarian?.userId,
  });

  const methods = useForm({
    values: {
      daysAvailable: veterinarian.daysAvailable,
    },
  });
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  const renderAppointmentStatus = () => {
    if (appointment?.requestStatus === "pending") {
      return "Aguardando confirmação do veterinário...";
    }

    if (appointment?.requestStatus === "accepted") {
      return "Consulta agendada";
    }

    if (appointment?.requestStatus === "rejected") {
      return "Consulta rejeitada";
    }
  };

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
          {(!appointment?.requestStatus ||
            appointment.requestStatus === "finished") && (
            <Button
              onPress={() => {
                requestAppointmentService({
                  veterinarianId: veterinarian?.userId,
                  requestStatus: "pending",
                  tutorDetails: {
                    fullName: userDetails?.fullName,
                    id: userDetails?.id,
                  },
                });
              }}
            >
              Solicitar consulta
            </Button>
          )}

          <Text>{renderAppointmentStatus()}</Text>
        </ButtonContainer>
      </Container>
    </DefaultLayout>
  );
}
