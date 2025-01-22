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
    height: "100%",
    width: "100%",
    backgroundColor: 'lightgreen',
    // Ensures children don't exceed parent's boundaries

    }}
    accessible={true}
    // so parent container size: 100h*100w
    // so child will take max 100h and 100w
    >
       
        {/* child 1 */}
<View
 style={{
    height: "25%",
    backgroundColor: 'lightblue'
    }}
    // 
>

</View>

<View
 style={{
    height: "50%",
    backgroundColor: 'orange'
    }}
>

</View>

      {/* <Image source={require("./assets/images/splash.png")} /> */}
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})