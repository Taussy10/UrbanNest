import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useBasic , useCustomHook } from '~/learning-section/custom-hook'
import { SafeAreaView } from 'react-native-safe-area-context'
import { testing, yo } from '~/appwrite/appwrite'


const Hello = () => {
    // console.log("basic :",useBasic());
    console.log("custom :",useCustomHook(testing));
    console.log("custom Yo :",useCustomHook(yo));
    
  return (
    <SafeAreaView className=' flex-1 justify-center items-center'>
      <Text>Hello</Text>
    </SafeAreaView>
  )
}

export default Hello

const styles = StyleSheet.create({})