import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

export default function ProfileScreen() {
  const [selectedDates, setSelectedDates] = useState({});

  // Function to handle date selection
  const handleDateChange = (date) => {
    // Clone the existing selected dates state
    const updatedDates = { ...selectedDates };

    // Toggle the selection status of the date
    updatedDates[date.dateString] = !updatedDates[date.dateString];

    // Update the state with the new selected dates
    setSelectedDates(updatedDates);
  };

  // Function to handle removing a selected date
  const handleRemoveDate = (date) => {
    // Clone the existing selected dates state
    const updatedDates = { ...selectedDates };

    // Remove the selected date from the state
    delete updatedDates[date];

    // Update the state with the new selected dates
    setSelectedDates(updatedDates);
  };

  // Function to render each selected date in the FlatList
  const renderSelectedDate = ({ item }) => (
    <TouchableOpacity onPress={() => handleRemoveDate(item)}>
      <View style={styles.selectedDateItem}>
        <Text style={styles.selectedDateValue}>{item}</Text>
        <Text style={styles.closeIcon}>✕</Text>
      </View>
    </TouchableOpacity>
  );

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
          markedDates={selectedDates}
        />

        {/* Display selected dates using FlatList */}
        <FlatList
          style={styles.selectedDatesList}
          data={Object.keys(selectedDates)}
          renderItem={renderSelectedDate}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    position : 'absolute',
    bottom : 32,
    backgroundColor : "#000"
  },
  contentContainer: {
    flexDirection: "row", // Arrange the Calendar and FlatList in a row
    alignItems: "flex-end", // Align them to the top
  },
  selectedDatesList: {
    // marginTop: 20,
    marginLeft: 10, // Add left margin to separate the Calendar and FlatList
    maxHeight: 310,
    height: 310,
    width : 125,
    borderWidth: 1, // Add border to the FlatList container
    borderColor: "#000", // Border color
    backgroundColor : "#fff",
    backfaceVisibility: "hidden",
    opacity : "0.6",
    borderRadius: 10,
  },
  selectedDateItem: {
    backgroundColor: "#5A6BFA",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row", // Align text in a row
    justifyContent: "space-between", // Add space between text and close icon
  },
  selectedDateValue: {
    fontSize: 14,
    color: "#fff",
  },
  closeIcon: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10, // Add left margin to separate the close icon
  },
});
