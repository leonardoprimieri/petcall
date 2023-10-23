import { z } from "zod";

export const registerPetTutorValidation = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
});

export type RegisterPetTutorFormData = z.infer<
  typeof registerPetTutorValidation
>;
