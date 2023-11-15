import { PropsWithChildren, forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { LatLng, PROVIDER_GOOGLE } from "react-native-maps";

import { MAP_DARK_THEME } from "./map-styles";
import { Loading } from "../loading/loading";

import { useUserLocation } from "~/hooks";

type Props = {
  onSetUserPosition?: (position: LatLng) => void;
  userPosition?: LatLng;
} & MapView["props"];

export const Map = forwardRef<MapView, PropsWithChildren<Props>>(
  function Modal(props, mapRef) {
    const { userLatitude, userLongitude } = useUserLocation();

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
          provider={PROVIDER_GOOGLE}
          showsCompass
          showsBuildings
          zoomEnabled
          zoomControlEnabled
          showsUserLocation
          customMapStyle={MAP_DARK_THEME}
          {...props}
        >
          {props.children}
        </MapView>
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
