import { format } from "date-fns";

export const formatDate = (date: Date) => {
  if (!date) return date;

  return format(date, "dd/MM/yyyy HH:mm");
};
