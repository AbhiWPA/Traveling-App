import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground, StyleSheet, Animated } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientBackground } from '../components/gradientBackground'

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
        <ImageBackground 
            source={require('../../assets/images/signUpBackground.jpg')}
            className="h-full w-full absolute"
        />
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../../assets/images/signup.png')} 
                style={{width: 165, height: 90}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor : '#9f6ecc' }}
        
            
      >
        <View className="form space-y-1">
            <Text className="text-black-700 ml-4" style={{fontWeight: 'bold'}}>Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                placeholder='Enter Name'
            />
            <Text className="text-black-700 ml-4" style={{fontWeight: 'bold'}}>Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                placeholder='Enter Email'
            />
            <Text className="text-black-700 ml-4" style={{fontWeight: 'bold'}}>Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                secureTextEntry
                placeholder='Enter Password'
            />
            <Text className="text-black-700 ml-4" style={{fontWeight: 'bold'}}>Re-Enter Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-2"
                secureTextEntry
                placeholder='Re-Enter Password'
            />
            <TouchableOpacity
                className="py-3 bg-yellow-400 rounded-xl"
                onPress={()=> navigation.navigate("DashBoard")}
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-2">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-4">
            <Text className="text-black-500 font-semibold mt-1">Already have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="text-blue-300" style = {{fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline'}}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    
    textArea : {
        
    }
    
})