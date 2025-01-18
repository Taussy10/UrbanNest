import { StyleSheet, Text, View , Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

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
      <Image 
      source={require("../assets/images/splash.png")}
      resizeMode= 'contain'
      style={{height: 250 , width: "100%"}}
      />
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})