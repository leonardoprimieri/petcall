import { z } from "zod";
import { clearCurrencyInput } from "~/helpers/clear-currency-input";

export const registerVeterinarianValidation = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  crmv: z.string().min(3, { message: "CRMV deve ter no mínimo 3 caracteres" }),
  daysAvailable: z
    .array(z.number())
    .min(1, { message: "Selecione pelo menos um dia" }),
  meetingUrl: z.string(),
  appointmentPrice: z
    .string({
      invalid_type_error: "Informe um valor válido",
    })
    .transform((value) => clearCurrencyInput(value)),
});

export type RegisterVeterinarianFormData = z.infer<
  typeof registerVeterinarianValidation
>;
