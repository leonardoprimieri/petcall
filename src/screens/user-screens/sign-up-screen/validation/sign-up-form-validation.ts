import { z } from "zod";

import { requiredValidator } from "~/validators/required-validator";

export const SignUpFormValidation = z
  .object({
    email: requiredValidator("E-mail").email("Email inválido"),
    password: requiredValidator("Senha").min(
      6,
      "Senha deve ter no mínimo 6 caracteres"
    ),
    passwordConfirmation: requiredValidator("Confirmação de senha").min(
      6,
      "Senha deve ter no mínimo 6 caracteres"
    ),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não são iguais",
    path: ["passwordConfirmation"],
  });

export type SignUpFormData = z.infer<typeof SignUpFormValidation>;
