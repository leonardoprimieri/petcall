export const applyPlatformFee = (amount: number) => {
  const FEE_PERCENTAGE = 10;

  return amount - (amount * FEE_PERCENTAGE) / 100;
};
