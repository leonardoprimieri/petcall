import styled from "styled-components/native";

export const UploadButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 150px;
  height: 150px;
  border-radius: 99999px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 22px;
  text-align: center;
  margin-top: 16px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 64px;
`;
