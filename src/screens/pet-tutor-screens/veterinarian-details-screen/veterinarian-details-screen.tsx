import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Linking } from "react-native";
import { useTheme } from "styled-components/native";

import { AppointmentModal } from "./components/appointment-modal/appointment-modal";
import {
  AcceptedContainer,
  AcceptedLabel,
  ButtonContainer,
  Container,
  GridDescription,
  GridDetails,
  GridItem,
  GridTitle,
  HeaderContainer,
  NotAvailableLabel,
  StatusLabel,
  VeterinarianName,
} from "./veterinarian-details-screen-styles";

import { Avatar } from "~/components/avatar/avatar";
import { Button } from "~/components/button/button";
import { IconButton } from "~/components/icon-button/icon-button";
import { ArrowLeftIcon } from "~/components/icons";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { formatCurrency } from "~/helpers/format-currency";
import { handleIsVeterinarianVoluntary } from "~/helpers/handle-is-veterinarian-voluntary";
import { isVeterinarianAvailableToday } from "~/helpers/is-veterinarian-available-today";
import { useAuthentication, useCheckForAppointments } from "~/hooks";
import { useLoadVeterinarianAppointmentsQuery } from "~/hooks/api/veterinarian/use-load-veterinarian-appointments-query";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

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
    const appointmentBelongsToUser =
      appointment?.tutorDetails?.id === userDetails?.userId;

    if (
      !appointmentBelongsToUser &&
      appointment?.requestStatus !== "finished" &&
      appointment
    ) {
      return "Esse veterinário já tem uma consulta em andamento. Tente novamente mais tarde.";
    }

    if (appointment?.requestStatus === "pending") {
      return "Já avisamos o veterinário que você deseja uma consulta. Aguarde a resposta dele.";
    }

    if (appointment?.requestStatus === "accepted") {
      return (
        <AcceptedContainer>
          <AcceptedLabel>
            A sua consulta foi aceita. Clique no botão abaixo para acessar a
            reunião:
          </AcceptedLabel>
          <Button onPress={openLink}>Acessar reunião</Button>
        </AcceptedContainer>
      );
    }

    if (appointment?.requestStatus === "rejected") {
      return "Infelizmente o veterinário não pode atender você agora. Não se preocupe, o pagamento foi estornado.";
    }
  };

  const openLink = () => {
    Linking.openURL(veterinarian?.meetingUrl);
  };

  const { isVoluntary, voluntaryLabel } = handleIsVeterinarianVoluntary({
    veterinarian,
  });

  const { isAvailable, notAvailableLabel } = isVeterinarianAvailableToday({
    veterinarian,
  });

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
            {isVoluntary && (
              <>
                <GridTitle>R$ 0,00</GridTitle>
                <GridDescription>{voluntaryLabel}</GridDescription>
              </>
            )}
            {!isVoluntary && (
              <>
                <GridTitle>
                  {formatCurrency(veterinarian.appointmentPrice)}
                </GridTitle>
                <GridDescription>Por consulta</GridDescription>
              </>
            )}
          </GridItem>
        </GridDetails>

        <FormProvider {...methods}>
          <WeekDaySelector removePadding disabled />
        </FormProvider>

        {isAvailable && (
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
        )}

        {!isAvailable && (
          <NotAvailableLabel>{notAvailableLabel}</NotAvailableLabel>
        )}

        <StatusLabel>{renderAppointmentStatus()}</StatusLabel>
      </Container>
      <AppointmentModal ref={modalRef} veterinarian={veterinarian} />
    </DefaultLayout>
  );
}
