import { z } from "zod";
import { whatsappNumberValidator } from "~/validators/whatsapp-number-validator";

export const registerPetTutorValidation = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  whatsapp: whatsappNumberValidator(),
});

export type RegisterPetTutorFormData = z.infer<
  typeof registerPetTutorValidation
>;
