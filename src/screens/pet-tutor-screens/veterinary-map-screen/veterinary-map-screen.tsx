import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { useUserLocation } from "./hooks/use-user-location";
import { SelectedClinicModal } from "./selected-clinic-modal/selected-clinic-modal";

import { HeaderLogo } from "~/components/header-logo/header-logo";

export const VeterinaryMapScreen = () => {
  const { location } = useUserLocation();

  const [selectedClinic, setSelectedClinic] = useState(null);

  const PINS = [
    {
      longitude: -46.636,
      latitude: -23.552,
      title: "Clínica Veterinária 1",
      description: "Rua 1, 123",
    },
    {
      longitude: -40.636,
      latitude: -20.553,
      title: "Clínica Veterinária 2",
      description: "Rua 2, 123",
    },
    {
      longitude: location?.coords.longitude,
      latitude: location?.coords.latitude,
      title: "Clínica Veterinária 3",
      description: "Rua 3, 123",
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderLogo text="Clínicas Veterinárias próximas a você" smallTitle />
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {PINS.map((clinic) => (
            <Marker
              coordinate={{
                longitude: clinic.longitude,
                latitude: clinic.latitude,
              }}
              image={require("~/assets/clinic.png")}
              onPress={() => setSelectedClinic(clinic)}
            />
          ))}
        </MapView>
      )}
      <SelectedClinicModal
        selectedClinic={selectedClinic}
        isOpen={selectedClinic}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
