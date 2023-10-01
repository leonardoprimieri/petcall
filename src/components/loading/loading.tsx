import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { Container, LoadIndicator } from "./loading-styles";

export const Loading = () => {
  return (
    <DefaultLayout>
      <Container>
        <LoadIndicator />
      </Container>
    </DefaultLayout>
  );
};
