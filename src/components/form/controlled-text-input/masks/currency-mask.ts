import { clearCurrencyInput } from "~/helpers/clear-currency-input";
import { formatCurrency } from "~/helpers/format-currency";

export const currencyMask = (value: string) => {
  if (!value) return value;

  if (value === "0") return "R$ 0,00";

  return formatCurrency(clearCurrencyInput(value));
};
