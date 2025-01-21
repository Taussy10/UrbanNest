import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Redirect } from 'expo-router'

const Onboarding = () => {
  return (
    <SafeAreaView
    style={styles.screen}
    >
      {/* <Text style={{fontFamily: 'Rubik-Bold'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-ExtraBold'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-Medium'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-Regular'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-SemiBold'}}>RootLayout</Text> */}

      {/* <Image 
      source={require("../assets/images/splash.png")}
      resizeMode= 'contain'
      style={{height: 250 , width: "100%"}}
      /> */}
      <Redirect href={"/(tabs)/home"}/>
      <Text className=' text-gray-400 '>WELCOME TO REAL SCOUT</Text>
      <Text className='  text-primary-100'>Let's Get You Closer</Text>
      <Text>TO <Text
      className=' text-green-500 text-2xl  '
      >Your Ideal Home </Text></Text>
      <Text className='text-green-700 '>Login to Real Scout with Google</Text>
      <TouchableOpacity>
        <Text>Sign Up with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    // justifyContent:'center',
    alignItems:'center'
  }
})