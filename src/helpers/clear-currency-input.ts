export const clearCurrencyInput = (value: string): number => {
  if (!value || typeof value === "number") return value as unknown as number;

  return Number(
    (Number(value?.replace(/\D/g, "")) / 100)
      ?.toLocaleString("en-US", {
        style: "decimal",
        currency: "USD",
      })
      ?.replace("$", "")
      ?.replace(/,/g, ""),
  );
};
