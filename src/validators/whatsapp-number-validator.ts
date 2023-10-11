import { z } from "zod";
import { clearString } from "~/helpers/clear-string";

export const whatsappNumberValidator = () => {
  return z
    .string()
    .min(15, { message: "Whatsapp inválido" })
    .transform((value) => clearString(value));
};
