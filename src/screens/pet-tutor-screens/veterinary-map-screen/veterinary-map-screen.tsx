import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { SelectedClinicModal } from "./components/selected-clinic-modal/selected-clinic-modal";
import { useUserLocation } from "./hooks/use-user-location";

import { HeaderLogo } from "~/components/header-logo/header-logo";
import { ClinicEntity } from "~/domain/entities/clinic-entity";

export const VeterinaryMapScreen = () => {
  const { location } = useUserLocation();
  const modalRef = useRef<BottomSheetModal>(null);
  const mapRef = useRef<MapView>(null);

  const [selectedClinic, setSelectedClinic] = useState<ClinicEntity | null>(
    null,
  );

  const PINS: ClinicEntity[] = [
    {
      latitude: -28.2604,
      longitude: -52.4021,
      name: "Passo Fundo Shopping",
      address: "Rua 1, 123",
      id: "1",
      imageUrl: "https://picsum.photos/500/300",
      phone: "123456789",
    },
    {
      longitude: -40.636,
      latitude: -20.553,
      name: "Clínica Veterinária 2",
      address: "Rua 2, 123",
      id: "2",
      imageUrl: "https://picsum.photos/300/300",
      phone: "123456789",
    },
  ];

  const handleOpenModal = (clinic: ClinicEntity) => {
    setSelectedClinic(clinic);
    modalRef.current?.present();
    mapRef?.current?.animateCamera({
      center: {
        latitude: clinic.latitude,
        longitude: clinic.longitude,
      },
      zoom: 15,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderLogo text="Clínicas Veterinárias próximas a você" smallTitle />
      {location && (
        <MapView
          ref={mapRef}
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
              onPress={() => handleOpenModal(clinic)}
            />
          ))}
        </MapView>
      )}
      <SelectedClinicModal selectedClinic={selectedClinic} ref={modalRef} />
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
