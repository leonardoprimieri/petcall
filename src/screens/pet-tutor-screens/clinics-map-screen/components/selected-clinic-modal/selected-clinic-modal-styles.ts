import styled from "styled-components/native";

import { IconButton } from "~/components/icon-button/icon-button";

export const Container = styled.View`
  background-color: #fff;
  align-items: center;
`;

export const ClinicName = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.FONTS.PRIMARY.SEMIBOLD};
  margin-top: 20px;
`;

export const DistanceContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ClinicDistance = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.FONTS.PRIMARY.REGULAR};
`;

export const Bold = styled.Text`
  font-family: ${(props) => props.theme.FONTS.PRIMARY.SEMIBOLD};
`;

export const InfoContainer = styled.View`
  gap: 12px;
  align-items: center;
  margin-bottom: 22px;
`;

export const StyledIconButton = styled(IconButton)`
  background-color: ${(props) => props.theme.COLORS.PRIMARY};
  border-radius: 4px;
  padding: 12px;
  transform: rotate(45deg);
  margin-top: 64px;
`;

export const Address = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.FONTS.PRIMARY.REGULAR};
  text-align: center;
  color: ${(props) => props.theme.COLORS.PRIMARY};
  margin-bottom: 12px;
`;

export const ClinicImage = styled.Image`
  width: 80%;
  height: 120px;
  border-radius: 4px;
  margin-top: 12px;
`;
