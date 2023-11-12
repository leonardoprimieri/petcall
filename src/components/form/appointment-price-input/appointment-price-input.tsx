import { useFormContext } from "react-hook-form";

import {
  AppointmentPriceContainer,
  DiscountLabel,
} from "./appointment-price-input-styles";
import { ControlledTextInput } from "../controlled-text-input/controlled-text-input";

import { applyPlatformFee } from "~/helpers/apply-platform-fee";
import { clearCurrencyInput } from "~/helpers/clear-currency-input";
import { formatCurrency } from "~/helpers/format-currency";

export const AppointmentPriceInput = () => {
  const { watch } = useFormContext();

  const appointmentPriceWithDiscount = applyPlatformFee(
    clearCurrencyInput(String(watch("appointmentPrice")))
  );

  const receivedAmountLabel = () => {
    if (!watch("appointmentPrice")) return;

    if (String(watch("appointmentPrice")) === "R$ 0,00") {
      return "Você optou por ser voluntário";
    }

    return `Você recebe: ${formatCurrency(appointmentPriceWithDiscount)}`;
  };

  return (
    <AppointmentPriceContainer>
      <ControlledTextInput
        name="appointmentPrice"
        label="Preço da consulta"
        keyboardType="numeric"
        mask="currency"
      />
      {receivedAmountLabel() && (
        <DiscountLabel>{receivedAmountLabel()}</DiscountLabel>
      )}
    </AppointmentPriceContainer>
  );
};
