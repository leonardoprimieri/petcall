import { z } from "zod";

import { requiredValidator } from "~/validators/required-validator";

export const CreatePetValidation = z.object({
  name: requiredValidator("Nome").min(3, {
    message: "Nome deve ter no mínimo 3 caracteres",
  }),
  weight: requiredValidator("Peso"),
  birthday: requiredValidator("Data de nascimento").min(10, {
    message: "Data de nascimento inválida",
  }),
});

export type CreatePetFormData = z.infer<typeof CreatePetValidation>;
