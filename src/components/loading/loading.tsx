import { Container, LoadIndicator } from "./loading-styles";

import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export const Loading = () => {
  return (
    <DefaultLayout>
      <Container>
        <LoadIndicator />
      </Container>
    </DefaultLayout>
  );
};
