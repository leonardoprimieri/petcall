export const formatCurrency = (value: number) => {
  if (!value) return value;

  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
