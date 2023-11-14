import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { Image, Text } from "react-native";
import MapView from "react-native-maps";

import { SelectedClinicModal } from "./components/selected-clinic-modal/selected-clinic-modal";
import { useLoadClinicsQuery } from "./hooks/use-load-clinics-query";

import { HeaderLogo } from "~/components/header-logo/header-logo";
import { Loading } from "~/components/loading/loading";
import { MapMarker } from "~/components/map/components/map-marker/map-marker";
import { Map } from "~/components/map/map";
import { ClinicEntity } from "~/domain/entities/clinic-entity";
import { useUserLocation } from "~/hooks";

export const ClinicsMapScreen = () => {
  const { location } = useUserLocation();
  const modalRef = useRef<BottomSheetModal>(null);
  const mapRef = useRef<MapView>(null);

  const { clinics, isLoading } = useLoadClinicsQuery();

  const [selectedClinic, setSelectedClinic] = useState<ClinicEntity | null>(
    null,
  );

  const handleOpenModal = (clinic: ClinicEntity) => {
    setSelectedClinic(clinic);
    modalRef.current?.present();
    mapRef?.current?.animateCamera({
      center: {
        latitude: clinic?.location?.latitude,
        longitude: clinic?.location?.longitude,
      },
      zoom: 10,
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <HeaderLogo text="Clínicas Veterinárias próximas a você" smallTitle />
      {location && (
        <Map ref={mapRef}>
          {clinics?.map((clinic) => (
            <MapMarker
              key={clinic.id}
              coordinate={{
                longitude: clinic?.location?.longitude,
                latitude: clinic?.location?.latitude,
              }}
              onPress={() => handleOpenModal(clinic)}
            >
              <Image
                source={{
                  uri: clinic?.imageUrl,
                  width: 85,
                  height: 85,
                }}
                style={{ borderRadius: 999 }}
              />
            </MapMarker>
          ))}
        </Map>
      )}
      <SelectedClinicModal selectedClinic={selectedClinic} ref={modalRef} />
    </>
  );
};
