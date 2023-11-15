import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 48px;
`;

export const HorizontalDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.PARAGRAPH};
  margin: 24px 0px;
`;

export const TutorDetails = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 18px;
  margin-bottom: 32px;
`;

export const TutorName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const TutorInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  margin-bottom: 12px;
`;
