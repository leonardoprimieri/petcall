import { z } from "zod";

import { clearCurrencyInput } from "~/helpers/clear-currency-input";
import { requiredValidator } from "~/validators/required-validator";

export const registerVeterinarianValidation = z.object({
  fullName: requiredValidator("Nome").min(3, {
    message: "Nome deve ter no mínimo 3 caracteres",
  }),
  crmv: requiredValidator("CRMV")
    .min(6, {
      message: "CRMV Inválido",
    })
    .max(6, {
      message: "CRMV Inválido",
    }),
  daysAvailable: z
    .array(z.number())
    .min(1, { message: "Selecione pelo menos um dia" }),
  meetingUrl: requiredValidator("Link da reunião"),
  appointmentPrice: z
    .string({
      invalid_type_error: "Informe um valor válido",
      required_error: "Preço é obrigatório",
    })
    .transform((value) => clearCurrencyInput(value)),
  birthDate: requiredValidator("Data de nascimento").min(10, {
    message: "Data de nascimento inválida",
  }),
});

export type RegisterVeterinarianFormData = z.infer<
  typeof registerVeterinarianValidation
>;
