import { LinearGradient } from "expo-linear-gradient";

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function gradientBackground() {
  return (
    <LinearGradient 
        colors={['#4c669f', '#3b5998', '#192f6a']} 
        style={styles.linearGradient}>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      }
})