import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

export default function ProfileScreen() {
  

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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
    // backgroundColor : "#000"
  },
});
