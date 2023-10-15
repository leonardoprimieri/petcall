import { z } from "zod";
import { clearCurrencyInput } from "~/helpers/clear-currency-input";
import { whatsappNumberValidator } from "~/validators/whatsapp-number-validator";

export const registerVeterinarianValidation = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  crmv: z.string().min(3, { message: "CRMV deve ter no mínimo 3 caracteres" }),
  whatsapp: whatsappNumberValidator(),
  daysAvailable: z
    .array(z.number())
    .min(1, { message: "Selecione pelo menos um dia" }),
  meetingUrl: z.string().url({ message: "URL inválida" }),
  appointmentPrice: z.string().transform((value) => clearCurrencyInput(value)),
});

export type RegisterVeterinarianFormData = z.infer<
  typeof registerVeterinarianValidation
>;
