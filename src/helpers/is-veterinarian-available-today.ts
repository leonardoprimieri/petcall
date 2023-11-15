import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const isVeterinarianAvailableToday = ({ veterinarian }: Props) => {
  const todayNumberDay = new Date().getDay();

  const isAvailable = veterinarian.daysAvailable?.includes(todayNumberDay);
  const notAvailableLabel = "Esse veterinário não está disponível hoje";

  return {
    isAvailable,
    notAvailableLabel,
  };
};
