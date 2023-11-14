import { z } from "zod";

import { requiredValidator } from "~/validators/required-validator";

export const SignInFormValidation = z.object({
  email: requiredValidator("E-mail").email("Email inválido"),
  password: requiredValidator("Senha").min(
    6,
    "Senha deve ter no mínimo 6 caracteres",
  ),
});
