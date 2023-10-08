import { clearCurrencyInput } from "~/helpers/clear-currency-input";
import { formatCurrency } from "~/helpers/format-currency";

export const currencyMask = (value: string) => {
  if (!value) return value;

  return formatCurrency(clearCurrencyInput(value));
};
