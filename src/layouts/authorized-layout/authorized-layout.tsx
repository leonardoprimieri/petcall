import { PropsWithChildren } from "react";

import { DefaultLayout } from "../default-layout/default-layout";
import { Footer } from "~/components/footer/footer";

export const AuthorizedLayout = ({ children }: PropsWithChildren) => {
  return (
    <DefaultLayout>
      {children}
      <Footer />
    </DefaultLayout>
  );
};
