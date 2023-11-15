import { MapMarkerProps, Marker } from "react-native-maps";

type Props = MapMarkerProps;

export const MapMarker = (props: Props) => {
  if (props.children) return <Marker {...props}>{props.children}</Marker>;

  return <Marker image={require("~/assets/clinic-marker.png")} {...props} />;
};
