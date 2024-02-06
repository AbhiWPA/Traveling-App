import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useMyContext } from "../context/context";

export default function DateSelector(props) {
  const { useStateDate, setUseStateDate } = useMyContext();

  // Function to handle date selection
  const handleDateChange = (date) => {
    setUseStateDate(date.dateString);
    console.log("Selected Date:", date.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Calendar
          startFromMonday={true}
          allowRangeSelection={true}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDayPress={handleDateChange}
          markedDates={{
            [useStateDate]: {
              selected: true,
              customStyles: customStyle,
            },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

const customStyle = {
  container: {
    backgroundColor: "#7300e6",
    borderRadius: 1,
    borderColor: "#f25d3f",
  },
  text: {
    color: "white",
  },
};
