import { Container } from "./veterinarian-appointments-screen-styles";
import { ActivityIndicator, FlatList } from "react-native";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { AppointmentCard } from "~/components/appointment-card/appointment-card";
import { useAuthentication } from "~/hooks";
import { useLoadVeterinarianAppointmentsQuery } from "~/hooks/api/veterinarian/use-load-veterinarian-appointments-query";

export function VeterinarianAppointmentsScreen() {
  const { userDetails } = useAuthentication();

  const { appointments, isLoading } = useLoadVeterinarianAppointmentsQuery({
    id: userDetails?.userId,
  });

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
                finishedAt={item.finishedAt as Date}
                fullName={item.tutorDetails?.fullName}
                imageUrl={item?.tutorDetails?.imageUrl}
              />
            )}
            style={{ padding: 20 }}
          />
        )}
      </Container>
    </DefaultLayout>
  );
}
