import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Welcome = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
`;

export const AvatarContainer = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;
