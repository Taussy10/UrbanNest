import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

// Pass params from previous screen:  
// <Link 
            // href={{
            //   pathname: "/[user]",
            //   params: {id: "hello"}
            // }}
            // >
            // Hello

            // </Link>


const User = () => {
    // then get the params 
    const {id}= useLocalSearchParams()

    console.log(id);
    
  return (
    <View>
      <Text>User</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({})