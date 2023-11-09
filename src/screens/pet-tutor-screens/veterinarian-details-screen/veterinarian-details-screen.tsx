import {
  ButtonContainer,
  Container,
  GridDescription,
  GridDetails,
  GridItem,
  GridTitle,
  HeaderContainer,
  StatusLabel,
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
import { useCheckForAppointments } from "~/hooks";
import { Linking, Text } from "react-native";
import { useLoadVeterinarianAppointmentsQuery } from "~/hooks/api/veterinarian/use-load-veterinarian-appointments-query";
import { AppointmentModal } from "./components/appointment-modal/appointment-modal";
import { useRef } from "react";

type RouteParams = {
  route: {
    params: {
      veterinarian: VeterinarianEntity;
    };
  };
};

export function VeterinarianDetailsScreen({ route }: RouteParams) {
  const { veterinarian } = route.params;

  const modalRef = useRef<any>(null);

  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  const { appointments } = useLoadVeterinarianAppointmentsQuery({
    id: veterinarian?.userId,
  });

  const { appointment } = useCheckForAppointments({
    veterinarianId: veterinarian?.userId,
  });

  const methods = useForm({
    values: {
      daysAvailable: veterinarian.daysAvailable,
    },
  });

  const renderAppointmentStatus = () => {
    if (appointment?.requestStatus === "pending") {
      return "Já avisamos o veterinário que você deseja uma consulta. Aguarde a resposta dele.";
    }

    if (appointment?.requestStatus === "accepted") {
      return (
        <Button onPress={openLink}>
          <Text>Acessar consulta em andamento</Text>
        </Button>
      );
    }

    if (appointment?.requestStatus === "rejected") {
      return "Consulta rejeitada";
    }
  };

  const openLink = () => {
    Linking.openURL(veterinarian?.meetingUrl);
  };

  return (
    <DefaultLayout>
      <Container>
        <HeaderContainer>
          <IconButton onPress={goBack}>
            <ArrowLeftIcon color={COLORS.PRIMARY} weight="bold" />
          </IconButton>
        </HeaderContainer>
        <Avatar size={110} url={veterinarian?.imageUrl} />
        <VeterinarianName>{veterinarian.fullName}</VeterinarianName>
        <GridDetails>
          <GridItem>
            <GridTitle>{appointments?.length}</GridTitle>
            <GridDescription>Consultas realizadas</GridDescription>
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
                modalRef?.current?.present();
              }}
            >
              Solicitar consulta
            </Button>
          )}
        </ButtonContainer>
        <StatusLabel>{renderAppointmentStatus()}</StatusLabel>
      </Container>
      <AppointmentModal ref={modalRef} veterinarian={veterinarian} />
    </DefaultLayout>
  );
}
