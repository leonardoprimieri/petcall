import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 12px;
  margin-bottom: 12px;
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
`;

export const VetPricePerHour = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 16px;
  margin-bottom: -8px;
`;

export const VetSchedule = styled.View``;

export const VetAppointmentBadge = styled.Text``;

export const Text = styled.Text`
  font-size: 16px;
`;

export const VetAvailableDays = styled.Text`
  font-size: 12px;
`;

export const VetAvatar = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 80px;
  height: 80px;
  border-radius: 999999px;
  justify-self: center;
  align-self: center;
`;
