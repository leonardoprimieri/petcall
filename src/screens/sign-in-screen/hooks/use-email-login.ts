import { emailLogin } from "@services/auth/email-login";
import { useState } from "react";

type EmailLoginParams = {
  email: string;
  password: string;
};

export const useEmailLogin = () => {
  const login = async (params: EmailLoginParams) => {
    await emailLogin(params).catch(console.log);
  };

  return { mutationFn: login };
};
