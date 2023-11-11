import { z } from "zod";

export const requiredValidator = (fieldName: string) =>
  z
    .string({
      required_error: `${fieldName} é obrigatório`,
    })
    .min(1, {
      message: `${fieldName} é obrigatório`,
    });
