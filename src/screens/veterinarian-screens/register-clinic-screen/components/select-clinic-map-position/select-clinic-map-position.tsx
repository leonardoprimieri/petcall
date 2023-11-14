import { useRef } from "react";
import MapView, { LatLng, MapPressEvent } from "react-native-maps";

import { FloatingConfirmButton } from "./select-clinic-map-position-styles";

import { Button } from "~/components/button/button";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { MapMarker } from "~/components/map/components/map-marker/map-marker";
import { Map } from "~/components/map/map";
import { useUserLocation } from "~/hooks";
import { useClinicStore } from "~/store/clinic-store";

type Props = {
  handleNextStep: () => void;
};

export const SelectClinicMapPosition = ({ handleNextStep }: Props) => {
  const { userLatitude, userLongitude, location } = useUserLocation();
  const mapRef = useRef<MapView>(null);

  const { clinicPosition, setClinicPosition } = useClinicStore();

  const handleMapPress = (e: MapPressEvent) => {
    setClinicPosition(e.nativeEvent.coordinate);
    mapRef?.current?.animateCamera({
      center: e.nativeEvent.coordinate,
      zoom: 10,
    });
  };

  const handleConfirm = () => {
    handleNextStep();
  };

  return (
    <>
      <HeaderLogo text="Clique e selecione a posição da clínica" smallTitle />
      {location && (
        <Map
          onSetUserPosition={setClinicPosition}
          userPosition={clinicPosition as LatLng}
          ref={mapRef}
          onPress={handleMapPress}
        >
          <MapMarker
            coordinate={{
              latitude: (clinicPosition?.latitude as number) ?? userLatitude,
              longitude: (clinicPosition?.longitude as number) ?? userLongitude,
            }}
            draggable
            onDragEnd={(e) => {
              setClinicPosition(e.nativeEvent.coordinate);
            }}
          />
        </Map>
      )}
      <FloatingConfirmButton>
        <Button onPress={handleConfirm}>Confirmar</Button>
      </FloatingConfirmButton>
    </>
  );
};
