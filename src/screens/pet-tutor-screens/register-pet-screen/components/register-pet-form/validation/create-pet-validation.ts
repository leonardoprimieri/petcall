import { z } from "zod";

export const CreatePetValidation = z.object({
  name: z.string({ required_error: "O peso é obrigatório" }),
  weight: z.string({
    required_error: "O peso é obrigatório",
  }),
  birthday: z.string({
    required_error: "A data de nascimento é obrigatória",
  }),
  // type: z.nullable(z.string()),
});

export type CreatePetFormData = z.infer<typeof CreatePetValidation>;
