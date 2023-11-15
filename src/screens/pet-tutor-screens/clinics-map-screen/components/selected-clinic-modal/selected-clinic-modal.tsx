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
  VetInfoContainer,
  VetName,
  VetPrice,
  VetTitle,
  VeterinarianContainer,
} from "./selected-clinic-modal-styles";

import { Avatar } from "~/components/avatar/avatar";
import { BottomModal } from "~/components/bottom-sheet-modal/bottom-sheet-modal";
import { ArrowElbowUpRightIcon, MapPinIcon } from "~/components/icons";
import { ClinicEntity } from "~/domain/entities/clinic-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { formatCurrency } from "~/helpers/format-currency";
import { useUserLocation } from "~/hooks";

type Props = {
  selectedClinic: ClinicEntity | null;
};

export const SelectedClinicModal = forwardRef<any, Props>(function Modal(
  { selectedClinic },
  ref,
) {
  const { location, granted } = useUserLocation();
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

  if (!granted) return null;

  return (
    <BottomModal
      BottomSheetModalProps={{
        snapPoints: ["50%", "80%"],
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
          <VetTitle>Atende aqui:</VetTitle>
          <VeterinarianContainer
            to={{
              screen: "VeterinarianDetails",
              params: {
                veterinarian:
                  selectedClinic?.veterinarianDetails as VeterinarianEntity,
              },
            }}
          >
            <Avatar
              size={50}
              url={selectedClinic?.veterinarianDetails?.imageUrl}
            />
            <VetInfoContainer>
              <VetName>{selectedClinic?.veterinarianDetails?.fullName}</VetName>
              <VetPrice>
                {formatCurrency(
                  selectedClinic?.veterinarianDetails
                    ?.appointmentPrice as number,
                )}
              </VetPrice>
            </VetInfoContainer>
          </VeterinarianContainer>
          <DistanceContainer>
            <MapPinIcon color={COLORS.PRIMARY} />
            <Address>{selectedClinic?.complement}</Address>
          </DistanceContainer>
          <ClinicDistance>
            <Bold>Aproximadamente</Bold> {distanceBetweenClinicAndUser}km de
            você
          </ClinicDistance>
          <ClinicDistance>
            {selectedClinic?.email} - {selectedClinic?.phone}
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
