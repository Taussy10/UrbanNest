import { Image, requireNativeComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '~/constants/images'

//         flexDirection: 'row',
// justifyContent:'center',
// alignItems: 'center',
const Test = () => {
  return (
    <View
    style={{
 // itn takes available space of screen
    // height: 100,
    backgroundColor: 'lightgreen',
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  // padding: 10,
    // Ensures children don't exceed parent's boundaries

    }}
    accessible={true}
    // so parent container size: 100h*100w
    // so child will take max 100h and 100w
    >
       
    {/* child 1 will take 0% of 100px(container*/}
<View
 style={{
   height: 200,
   width: 100,
    backgroundColor: 'lightblue'
    }}
    // 
/>


     {/* child 2 will take 50% of 100px(container) which is equal to 50px*/}
<View
 style={{
  height: 200,
   width: 100,
  backgroundColor: 'orange',
    
    // padding: 10,
    }}
 />
<View
 style={{
  height: 200,
   width: 100,
  backgroundColor: 'yellow',
    // padding: 10,
    }}
 />



      {/* <Image source={require("./assets/images/splash.png")} /> */}
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})