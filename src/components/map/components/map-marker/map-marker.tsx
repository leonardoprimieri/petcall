import { MapMarkerProps, Marker } from "react-native-maps";

type Props = MapMarkerProps;

export const MapMarker = (props: Props) => {
  return <Marker image={require("~/assets/clinic.png")} {...props} />;
};
