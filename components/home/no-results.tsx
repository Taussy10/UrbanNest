import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '~/constants/images'
const NoResults = () => {
  return (
    <View className=' flex-1 items-center justify-center my-5'>
      <Image
       source={images.noResult}
       className=' size-72'
       />
       <Text className=' text-4xl font-rubik-bold text-black-300 mt-4'>No Result</Text>
    </View>
  )
}

export default NoResults

const styles = StyleSheet.create({})