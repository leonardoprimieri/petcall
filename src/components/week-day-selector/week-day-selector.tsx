import { useFormContext } from "react-hook-form";
import { WeekDay } from "./components/week-day/week-day";
import { WEEK_DAYS } from "./constants/week-days.const";
import {
  Container,
  ErrorMessage,
  Label,
  WeekDaysContainer,
} from "./week-day-selector-styles";
import { useMemo } from "react";

export const WeekDaySelector = () => {
  const { setValue, watch, getFieldState, getValues } = useFormContext();

  const daysAvailable = (watch("daysAvailable") as number[]) || [];

  const handleSelectDay = (id: number) => {
    if (!daysAvailable.includes(id))
      return setValue("daysAvailable", [...daysAvailable, id]);

    return setValue(
      "daysAvailable",
      daysAvailable.filter((day) => day !== id)
    );
  };

  const errorMessage = getFieldState("daysAvailable")?.error?.message;

  return (
    <Container>
      <Label>Dias que atende:</Label>
      <WeekDaysContainer>
        {WEEK_DAYS.map((day) => (
          <WeekDay
            isSelected={daysAvailable.includes(day.id)}
            onPress={() => handleSelectDay(day.id)}
            key={day.id}
          >
            {day.name}
          </WeekDay>
        ))}
      </WeekDaysContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};
