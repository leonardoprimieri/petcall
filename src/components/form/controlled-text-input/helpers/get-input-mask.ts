import { creditCardMask } from "../masks/credit-card-mask";
import { currencyMask } from "../masks/currency-mask";
import { expirationDateMask } from "../masks/expiration-date-mask";
import { phoneNumberMask } from "../masks/phone-number-mask";
import { zipCodeMask } from "../masks/zip-code-mask";

type Args = {
  event: string;
  mask: string;
};

export const getInputMask = ({ event, mask }: Args) => {
  const masks: Record<string, Function> = {
    phone: phoneNumberMask,
    currency: currencyMask,
    creditCard: creditCardMask,
    expirationDate: expirationDateMask,
    zipCode: zipCodeMask,
  };

  return (event = masks[mask](event));
};
