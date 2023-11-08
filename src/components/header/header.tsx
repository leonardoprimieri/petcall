import { useAuthentication } from "~/hooks/auth/use-authentication";
import {
  Container,
  Welcome,
  Name,
  Divider,
  HeaderContainer,
  AvatarContainer,
} from "./header-styles";
import { IconButton } from "../icon-button/icon-button";
import { LogoutIcon } from "../icons";
import { useTheme } from "styled-components/native";
import { Avatar } from "../avatar/avatar";

export const Header = () => {
  const { userDetails, logout } = useAuthentication();
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderContainer>
        <AvatarContainer>
          <Avatar url={userDetails?.imageUrl} size={32} removeBorder />
          <Welcome>
            Olá, <Name>{userDetails?.fullName}</Name>
          </Welcome>
        </AvatarContainer>
        <IconButton onPress={logout}>
          <LogoutIcon color={COLORS.PRIMARY} weight="bold" />
        </IconButton>
      </HeaderContainer>

      <Divider />
    </Container>
  );
};
