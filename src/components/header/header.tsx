import { useAuthentication } from "@hooks/auth/use-authentication";
import { Container, Welcome, Name } from "./header-styles";

export const Header = () => {
  const { userDetails } = useAuthentication();

  return (
    <Container>
      <Welcome>
        Olá! <Name>{userDetails?.fullName}</Name>
      </Welcome>
    </Container>
  );
};
