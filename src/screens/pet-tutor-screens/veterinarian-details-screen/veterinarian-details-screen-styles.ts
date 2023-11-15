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
  text-transform: capitalize;
`;

export const GridDetails = styled.View`
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: center;
  width: 100%;
`;

export const GridItem = styled.View`
  align-items: center;
`;

type GridTitleProps = {
  large?: boolean;
};

export const GridTitle = styled.Text<GridTitleProps>`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.EXTRA_BOLD};
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

type GridDescriptionProps = {
  large?: boolean;
};

export const GridDescription = styled.Text<GridDescriptionProps>`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ large }) => (large ? "18px" : "14px")};
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const StatusLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-top: 16px;
  text-align: center;
`;

export const AcceptedLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  width: 320px;
  text-align: center;
`;

export const AcceptedContainer = styled.View`
  padding: 0px 32px;
  gap: 16px;
`;

export const NotAvailableLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  width: 320px;
  text-align: center;
`;
