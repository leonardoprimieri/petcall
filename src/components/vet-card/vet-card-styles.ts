import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-end;
  padding: 12px 16px 12px 12px;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_DARK};
`;

export const FirstContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const VetInfo = styled.View``;

export const VetName = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 18px;
  margin-bottom: 12px;
  text-transform: capitalize;
`;

export const VetPricePerHour = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.EXTRA_BOLD};
  font-size: 18px;
  margin-bottom: -8px;
`;

export const VetSchedule = styled.View`
  margin-left: auto;
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const VetAvailableDays = styled.Text`
  font-size: 12px;
`;

export const VoluntaryLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  width: 140px;
`;
