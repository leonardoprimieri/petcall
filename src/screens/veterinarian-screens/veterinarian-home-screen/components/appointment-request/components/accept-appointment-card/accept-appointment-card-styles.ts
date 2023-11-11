import styled from "styled-components/native";

export const MeetingLink = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 18px;
  margin: 16px 0px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
