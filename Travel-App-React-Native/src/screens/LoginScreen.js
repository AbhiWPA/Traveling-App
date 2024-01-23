import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import LoginCard from '../components/LoginCard';

export default function LoginScreen() {
    

  return (
    <View style={styles.container}>
        <ImageBackground 
            source={require('../../assets/images/signUpBackground.jpg')}
            className="h-full w-full absolute"
        />
      <Image source={require('../../assets/images/login.png')} style={styles.image}/> 
      <LoginCard/>
      </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    

    card : {
        backgroundColor: '#E3E3E3',
        borderTopLeftRadius: 10,
        borderTopRightRadius : 10,
        width : 370,
        height : 'auto'
    },

    image : {
        maxWidth : 200,
        maxHeight : 200, 
        marginBottom : 10, 
        marginTop : 110
    }
  });
