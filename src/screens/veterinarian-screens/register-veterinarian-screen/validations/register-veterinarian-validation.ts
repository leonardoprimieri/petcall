import { z } from "zod";

export const registerVeterinarianValidation = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  crmv: z.string().min(3, { message: "CRMV deve ter no mínimo 3 caracteres" }),
  whatsapp: z
    .string()
    .min(3, { message: "Whatsapp deve ter no mínimo 3 caracteres" }),
  daysAvailable: z
    .array(z.number())
    .min(1, { message: "Selecione pelo menos um dia" }),
  appointmentPrice: z.string(),
});

export type RegisterVeterinarianFormData = z.infer<
  typeof registerVeterinarianValidation
>;
