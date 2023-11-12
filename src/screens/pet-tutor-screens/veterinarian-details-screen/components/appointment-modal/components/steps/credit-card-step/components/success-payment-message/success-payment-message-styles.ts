import styled from "styled-components/native";

export const SuccessPaymentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const SuccessPaymentLabel = styled.Text`
  font-family: ${(props) => props.theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 18px;
  color: green;
`;
