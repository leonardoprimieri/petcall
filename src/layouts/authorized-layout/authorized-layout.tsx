import { PropsWithChildren } from "react";

import { DefaultLayout } from "../default-layout/default-layout";

export const AuthorizedLayout = ({ children }: PropsWithChildren) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};
