import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const handleIsVeterinarianVoluntary = ({ veterinarian }: Props) => {
  const isVoluntary = veterinarian?.appointmentPrice === 0;

  return { isVoluntary, voluntaryLabel: "Veterinário Voluntário" };
};
