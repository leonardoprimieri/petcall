import { useAuthentication } from "~/hooks/auth/use-authentication";
import { Container, Welcome, Name } from "./header-styles";
import { Pressable, Text } from "react-native";

export const Header = () => {
  const { userDetails, logout } = useAuthentication();

  return (
    <Container>
      <Welcome>
        Olá! <Name>{userDetails?.fullName}</Name>
      </Welcome>

      <Pressable onPress={logout}>
        <Text>Sair</Text>
      </Pressable>
    </Container>
  );
};
