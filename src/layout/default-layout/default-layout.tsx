import { PropsWithChildren } from "react";
import { Container } from "./default-layout-styles";

export function DefaultLayout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
