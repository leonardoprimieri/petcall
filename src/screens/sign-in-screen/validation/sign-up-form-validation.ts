import { z } from "zod";

export const SignUpFormValidation = z.object({
  email: z
    .string({
      required_error: "Campo obrigatório",
    })
    .email("Email inválido")
    .min(1, "Campo obrigatório"),
  password: z
    .string({
      required_error: "Campo obrigatório",
    })
    .min(1, "Campo obrigatório")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});
