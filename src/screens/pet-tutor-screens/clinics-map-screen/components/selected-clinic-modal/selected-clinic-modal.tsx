import { BottomSheetModal } from "@gorhom/bottom-sheet";
import haversine from "haversine";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Linking } from "react-native";
import { useTheme } from "styled-components/native";

import {
  Address,
  Bold,
  ClinicDistance,
  ClinicImage,
  ClinicName,
  Container,
  DistanceContainer,
  InfoContainer,
  StyledIconButton,
} from "./selected-clinic-modal-styles";

import { BottomModal } from "~/components/bottom-sheet-modal/bottom-sheet-modal";
import { ArrowElbowUpRightIcon, MapPinIcon } from "~/components/icons";
import { ClinicEntity } from "~/domain/entities/clinic-entity";
import { useUserLocation } from "~/hooks";

type Props = {
  selectedClinic: ClinicEntity | null;
};

export const SelectedClinicModal = forwardRef<any, Props>(function Modal(
  { selectedClinic },
  ref,
) {
  const { location } = useUserLocation();
  const { COLORS } = useTheme();
  const modalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    present: () => {
      modalRef.current?.present();
    },
  }));

  const handleGoToGoogleMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${selectedClinic?.location?.latitude},${selectedClinic?.location?.longitude}`,
    );
  };

  const distanceBetweenClinicAndUser = haversine(
    {
      latitude: location?.coords.latitude as number,
      longitude: location?.coords.longitude as number,
    },
    {
      latitude: selectedClinic?.location?.latitude as number,
      longitude: selectedClinic?.location?.longitude as number,
    },
    {
      unit: "km",
    },
  ).toFixed(1);

  return (
    <BottomModal
      BottomSheetModalProps={{
        snapPoints: ["50%", "50%"],
      }}
      ref={modalRef}
    >
      <Container>
        <ClinicImage
          source={{
            uri: selectedClinic?.imageUrl,
          }}
        />
        <InfoContainer>
          <ClinicName>{selectedClinic?.name}</ClinicName>
          <DistanceContainer>
            <MapPinIcon color={COLORS.PRIMARY} />
            <Address>{selectedClinic?.complement}</Address>
          </DistanceContainer>
          <ClinicDistance>
            <Bold>Aproximadamente</Bold> {distanceBetweenClinicAndUser}km de
            você
          </ClinicDistance>
        </InfoContainer>
        <StyledIconButton onPress={handleGoToGoogleMaps}>
          <ArrowElbowUpRightIcon
            size={32}
            color="#fff"
            style={{
              transform: [{ rotate: "-45deg" }],
            }}
          />
        </StyledIconButton>
      </Container>
    </BottomModal>
  );
});
