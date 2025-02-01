import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CallBack = () => {
    const a = () => {
        console.log("Hello");
        
    }

 console.log(a === a);
 

  return (
    <View>
      <Text>CallBack</Text>
    </View>
  )
}

export default CallBack

const styles = StyleSheet.create({})