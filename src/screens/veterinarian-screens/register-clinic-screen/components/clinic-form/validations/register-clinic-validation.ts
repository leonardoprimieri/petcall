import { z } from "zod";

import { requiredValidator } from "~/validators/required-validator";

export const RegisterClinicValidation = z.object({
  clinicName: requiredValidator("Nome"),
  clinicComplement: requiredValidator("Complemento"),
  clinicPhone: requiredValidator("Número de telefone"),
  clinicEmail: requiredValidator("E-mail").email("Email inválido"),
});

export type RegisterClinicFormData = z.infer<typeof RegisterClinicValidation>;
