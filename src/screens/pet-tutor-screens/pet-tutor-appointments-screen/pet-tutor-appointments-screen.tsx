import { ActivityIndicator, FlatList, Text } from "react-native";

import { Container } from "./pet-tutor-appointments-screen-styles";

import { AppointmentCard } from "~/components/appointment-card/appointment-card";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useAuthentication } from "~/hooks";
import { useLoadPetTutorAppointmentsQuery } from "~/hooks/api/pet-tutor/use-load-pet-tutor-appointments-query";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function PetTutorAppointmentsScreen() {
  const { userDetails } = useAuthentication();

  const { appointments, isLoading } = useLoadPetTutorAppointmentsQuery(
    userDetails?.userId
  );
  console.log(
    "🚀 ~ file: pet-tutor-appointments-screen.tsx:15 ~ PetTutorAppointmentsScreen ~ appointments:",
    JSON.stringify(appointments, null, 2)
  );

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Histórico de consultas" />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={appointments}
            renderItem={({ item }) => (
              <AppointmentCard
                appointmentPrice={item?.veterinarianDetails?.appointmentPrice}
                finishedAt={item?.finishedAt as Date}
                fullName={item?.veterinarianDetails?.fullName}
                imageUrl={item?.veterinarianDetails?.imageUrl}
                CollapseContent={<Text>Teste</Text>}
              />
            )}
            style={{ padding: 20 }}
          />
        )}
      </Container>
    </DefaultLayout>
  );
}
