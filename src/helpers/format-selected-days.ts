export const formatSelectedDays = (days: number[]) => {
  const weekDays: Record<number, string> = {
    1: "Seg",
    2: "Ter",
    3: "Qua",
    4: "Qui",
    5: "Sex",
  };

  return days.map((day) => weekDays[day]).join(", ");
};
