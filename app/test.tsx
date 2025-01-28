import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router';
// https://docs.expo.dev/versions/latest/sdk/router/#uselocalsearchparams


const Test = () => {
  const params = useLocalSearchParams();

  console.log(params);
  

  return (
    <SafeAreaView>
<Text>User: {params}</Text>
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({})