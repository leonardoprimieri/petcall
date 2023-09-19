import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0px;
  height: 82px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 32px;
`;
