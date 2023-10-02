import { useAuthentication } from "~/hooks/auth/use-authentication";
import {
  Container,
  Welcome,
  Name,
  WelcomeMessageContainer,
  Divider,
  HeaderContainer,
} from "./header-styles";
import { IconButton } from "../icon-button/icon-button";
import { LogoutIcon } from "../icons";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

export const Header = () => {
  const { userDetails, logout } = useAuthentication();
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderContainer>
        <Welcome>
          Olá, <Name>{userDetails?.fullName}</Name>
        </Welcome>
        <IconButton onPress={logout}>
          <LogoutIcon color={COLORS.PRIMARY} weight="bold" />
        </IconButton>
      </HeaderContainer>

      <Divider />
    </Container>
  );
};
