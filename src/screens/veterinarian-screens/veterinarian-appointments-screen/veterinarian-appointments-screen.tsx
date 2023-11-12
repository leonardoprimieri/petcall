import { ActivityIndicator, FlatList } from "react-native";

import { Container } from "./veterinarian-appointments-screen-styles";

import { AppointmentCard } from "~/components/appointment-card/appointment-card";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { applyPlatformFee } from "~/helpers/apply-platform-fee";
import { useAuthentication } from "~/hooks";
import { useLoadVeterinarianAppointmentsQuery } from "~/hooks/api/veterinarian/use-load-veterinarian-appointments-query";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function VeterinarianAppointmentsScreen() {
  const { userDetails } = useAuthentication();

  const { appointments, isLoading } = useLoadVeterinarianAppointmentsQuery({
    id: userDetails?.userId,
    loadRejected: true,
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
                appointmentPrice={applyPlatformFee(
                  item?.veterinarianDetails?.appointmentPrice
                )}
                finishedAt={item.finishedAt as Date}
                fullName={item.tutorDetails?.fullName}
                imageUrl={item?.tutorDetails?.imageUrl}
                wasRejected={item?.wasRejected}
                petDetails={item?.petDetails}
                note={item?.note}
              />
            )}
            style={{ padding: 20 }}
          />
        )}
      </Container>
    </DefaultLayout>
  );
}
