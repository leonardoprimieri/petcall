import { z } from "zod";

import { requiredValidator } from "~/validators/required-validator";

export const CreditCardFormValidation = z.object({
  fullName: requiredValidator("Nome completo"),
  cardNumber: requiredValidator("Número do cartão").min(19, {
    message: "Número do cartão inválido",
  }),
  cardExpDate: requiredValidator("Data de expiração").min(5, {
    message: "Data de expiração inválida",
  }),
  cardCvv: requiredValidator("CVV").min(3, {
    message: "CVV inválido",
  }),
  zipCode: requiredValidator("CEP").min(9, {
    message: "CEP inválido",
  }),
});

export type CreditCardFormData = z.infer<typeof CreditCardFormValidation>;
