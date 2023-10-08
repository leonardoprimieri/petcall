import { currencyMask } from "../masks/currency-mask";
import { phoneNumberMask } from "../masks/phone-number-mask";

type Args = {
  event: string;
  mask: string;
};

export const getInputMask = ({ event, mask }: Args) => {
  const masks: Record<string, Function> = {
    phone: phoneNumberMask,
    currency: currencyMask,
  };

  return (event = masks[mask](event));
};
