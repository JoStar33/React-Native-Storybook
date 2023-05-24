import React, { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarCard = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  return (
    <View>
      <Calendar
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "orange"
          },
        }}
        theme={{
          selectedDayBackgroundColor: "#009688",
          arrowColor: "#009688",
          dotColor: "#009688",
          todayTextColor: "#009688",
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
      />
    </View>
  );
};

export default CalendarCard;
