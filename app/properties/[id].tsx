import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PropertyDetails = () => {
    const {params} = useLocalSearchParams()

    console.log(params);
    
  return (
    <View>
      <Text>PropertyDetails</Text>
    </View>
  )
}

export default PropertyDetails

const styles = StyleSheet.create({})