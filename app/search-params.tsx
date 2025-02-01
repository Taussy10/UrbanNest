import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'


{/*  Pass params from previous screen 
 and [id] is a dynamic file :  
//  <Link
//             href={{
//               pathname: "/properties/[id]",
//               params: {id: "Hello", name: "Tausif"}
//             }}>
<Text>Hello</Text>
</Link> */}


const User = () => {
    // then get the params 
    const {id, name}= useLocalSearchParams()
    console.log(id);
    
  return (
    <View>
      <Text>User</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({})