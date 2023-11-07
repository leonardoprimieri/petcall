import { Container } from "./pet-tutor-appointments-screen-styles";
import { ActivityIndicator, FlatList, View } from "react-native";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useLoadPetTutorAppointmentsQuery } from "~/hooks/api/pet-tutor/use-load-pet-tutor-appointments-query";
import { AppointmentCard } from "~/components/appointment-card/appointment-card";
import { useAuthentication } from "~/hooks";

export function PetTutorAppointmentsScreen() {
  const { userDetails } = useAuthentication();

  const { appointments, isLoading } = useLoadPetTutorAppointmentsQuery(
    userDetails?.id
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
            renderItem={({ item }) => <AppointmentCard appointment={item} />}
            style={{ padding: 20 }}
          />
        )}
      </Container>
    </DefaultLayout>
  );
}
