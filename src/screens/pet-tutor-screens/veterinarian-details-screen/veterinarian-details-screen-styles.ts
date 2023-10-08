import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const HeaderContainer = styled.View`
  margin-bottom: auto;
  margin-top: 24px;
  margin-right: auto;
`;

export const VeterinarianName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin: 16px;
`;

export const GridDetails = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
`;

export const GridItem = styled.View`
  align-items: center;
`;

export const GridTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.EXTRA_BOLD};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const GridDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;
