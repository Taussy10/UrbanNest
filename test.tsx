import { Image, requireNativeComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from './constants/images'

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
      <Image source={require("./assets/images/splash.png")} />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})