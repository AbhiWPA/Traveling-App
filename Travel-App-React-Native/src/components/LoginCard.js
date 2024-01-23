import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Perform login logic here
      console.log('Logging in...');
    };

    const navigation = useNavigation();
  return (
    <LinearGradient colors={['#C3C7CB', '#9f6ecc']} className="flex-2 bg-white px-8 py-8 mt-5"
    style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor : '#9f6ecc', bottom : 0 }}>
        {/* <View style={styles.headerImage}></View> */}
      <View style={styles.card}>
      <Text style={styles.title}>Weather Wise Traveler</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666664"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666664"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate("DashBoard")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text className="text-xl text-gray-700 font-bold text-center py-2">
            OR
        </Text>

        <View className="flex-row justify-center mt-4">
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text className="text-black-300" style = {{fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline'}}> Back to Sign Up </Text>
            </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
    },
    card: {
      padding: 16,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#F09A0D',
      marginBottom: 12,
      padding : 10
    },
    content: {
      fontSize: 16,
      color: '#fff',
    },

      input: {
        width: '100%',
        height: 40,
        borderColor: '#7F7F7E',
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#181817',
      },
      loginButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#007bff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 10
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },

    //   headerImage : {
    //     borderColor : 'red',
    //     borderWidth : 2,
    //     width : 80,
    //     height : 80,
    //     borderRadius : 100,
    //     position : 'absolute',
    //     top : -55,
    //     right : 120,
    //     paddingBottom : 10,
    //     backgroundColor : '#C3C7CB',
    //     zIndex : 1
    //   }
    },
  );