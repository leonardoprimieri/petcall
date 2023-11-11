import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  border-radius: 14px;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  gap: 32px;
  width: 100%;
  height: 80px;
  padding: 0 12px 0 16px;
  margin-bottom: 12px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  text-transform: capitalize;
  font-size: 18px;
`;

export const DescriptionContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  text-transform: capitalize;
`;

export const Separator = styled.View`
  width: 2px;
  height: 16px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const CurrencyContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const CurrencyDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  text-transform: capitalize;
`;

export const CollapseContainer = styled.View`
  width: 100%;
  padding: 0 12px 0 16px;
  margin: 16px 0px;
`;

export const CardTextContainer = styled.View``;
