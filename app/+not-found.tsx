import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const NotFound = () => {
  return (
    <SafeAreaView className=' flex-1 justify-center items-center'>
      <Text className=' text-2xl  font-rubik '>Screen not found</Text>
    </SafeAreaView>
  )
}

export default NotFound

const styles = StyleSheet.create({})