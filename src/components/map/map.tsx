import { PropsWithChildren, forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Camera, LatLng } from "react-native-maps";
import { useTheme } from "styled-components/native";

import { FloatingButtonContainer, MAP_DARK_THEME } from "./map-styles";
import { IconButton } from "../icon-button/icon-button";
import { CrossHairIcon, MinusCircleIcon, PlusCircleIcon } from "../icons";
import { Loading } from "../loading/loading";

import { useUserLocation } from "~/hooks";

type Props = {
  onSetUserPosition?: (position: LatLng) => void;
  userPosition?: LatLng;
} & MapView["props"];

export const Map = forwardRef<MapView, PropsWithChildren<Props>>(
  function Modal(props, mapRef) {
    const { userLatitude, userLongitude } = useUserLocation();

    const { COLORS } = useTheme();

    const handleUseUserLocation = () => {
      if (props.onSetUserPosition) {
        props.onSetUserPosition({
          latitude: userLatitude,
          longitude: userLongitude,
        });
      }

      mapRef?.current?.animateCamera({
        center: {
          latitude: userLatitude as number,
          longitude: userLongitude,
        },
        zoom: 10,
      });
    };
    const handleMapZoom = (
      { zoomOut }: { zoomOut?: boolean } = { zoomOut: false },
    ) => {
      mapRef?.current?.getCamera().then((cam: Camera) => {
        if (!cam?.zoom) return;

        if (zoomOut) {
          cam.zoom -= 2;
        } else {
          cam.zoom += 2;
        }

        mapRef?.current?.animateCamera(cam);
      });
    };

    const isSamePosition =
      userLatitude === props.userPosition?.latitude &&
      userLongitude === props.userPosition?.longitude;

    if (!userLatitude || !userLongitude) return <Loading />;

    return (
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            longitude: userLongitude,
            latitude: userLatitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          customMapStyle={MAP_DARK_THEME}
          {...props}
        >
          {props.children}
        </MapView>
        <FloatingButtonContainer>
          <IconButton
            backgroundColor={COLORS.PRIMARY}
            onPress={() => handleMapZoom({ zoomOut: false })}
            padding="12px"
          >
            <PlusCircleIcon size={32} />
          </IconButton>
          <IconButton
            backgroundColor={COLORS.PRIMARY}
            onPress={() => handleMapZoom({ zoomOut: true })}
            padding="12px"
          >
            <MinusCircleIcon size={32} />
          </IconButton>
          <IconButton
            backgroundColor={COLORS.PRIMARY}
            onPress={handleUseUserLocation}
            padding="12px"
            disabled={isSamePosition}
          >
            <CrossHairIcon size={32} />
          </IconButton>
        </FloatingButtonContainer>
      </View>
    );
  },
);

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
    minHeight: 500,
  },
});
