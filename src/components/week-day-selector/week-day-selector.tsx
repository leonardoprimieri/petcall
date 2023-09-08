import { useState } from "react";
import { WeekDay } from "./components/week-day/week-day";
import { WEEK_DAYS } from "./constants/week-days.const";
import {
  Container,
  Label,
  WeekDaysContainer,
} from "./week-day-selector-styles";
import { View } from "react-native";

export const WeekDaySelector = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  const handleSelectDay = (id: number) => {
    if (selectedDays.includes(id)) {
      return setSelectedDays(selectedDays.filter((day) => day !== id));
    }

    setSelectedDays([...selectedDays, id]);
  };

  return (
    <Container>
      <Label>Dias que atende:</Label>
      <WeekDaysContainer>
        {WEEK_DAYS.map((day) => (
          <WeekDay
            isSelected={selectedDays.includes(day.id)}
            onPress={() => handleSelectDay(day.id)}
            key={day.id}
          >
            {day.name}
          </WeekDay>
        ))}
      </WeekDaysContainer>
    </Container>
  );
};
