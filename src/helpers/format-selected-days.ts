export const formatSelectedDays = (days: number[]) => {
  const weekDays: Record<number, string> = {
    1: "Seg",
    2: "Ter",
    3: "Qua",
    4: "Qui",
    5: "Sex",
  };

  const orderedDays = days.sort((a, b) => a - b);

  if (days.length === Object.keys(weekDays).length) return "Todos os dias";

  return orderedDays.map((day) => weekDays[day]).join(", ");
};
