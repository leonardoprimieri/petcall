import { z } from "zod";

import { requiredValidator } from "~/validators/required-validator";

export const registerPetTutorValidation = z.object({
  fullName: requiredValidator("Nome").min(3, {
    message: "Nome deve ter no mínimo 3 caracteres",
  }),
  birthDate: requiredValidator("Data de nascimento").min(10, {
    message: "Data de nascimento inválida",
  }),
});

export type RegisterPetTutorFormData = z.infer<
  typeof registerPetTutorValidation
>;
