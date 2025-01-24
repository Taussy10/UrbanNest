import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Redirect } from 'expo-router'
import images from '~/constants/images'
import icons from '~/constants/icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'

const Onboarding = () => {
  const router = useRouter()

  const move = () => {
    router.replace('/(tabs)/home')
  }
  return (
    <SafeAreaView
    className={nativewind.screen}>
    
        {/* use redirect while working on any scren 
    app will refresh and move to that screen*/}
    {/* <Redirect href={'/details'} /> */}

      {/* don't delete this just: after compiltion of project can be delete */}
      {/* <Text style={{fontFamily: 'Rubik-Bold'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-ExtraBold'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-Medium'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-Regular'}}>RootLayout</Text>
      <Text style={{fontFamily: 'Rubik-SemiBold'}}>RootLayout</Text> */}

    
      {/* <Redirect href={"/(tabs)/profile"}/> */}

      <Image 
      source={images.onboarding}
      className= 'h-[60%] w-full'
      />

      {/* Texts */}

<LinearGradient 
 colors={['#ffffff', 'transparent']}

>

      <View
      className=' flex-col items-center mt-5'
      >

      <Text className=' text-[#666876] '>WELCOME TO REAL SCOUT</Text>

      {/* Cause it's group of welcoming text */}
      <View
      className=' flex-col  mt-4 mb-4'
      >
      <Text className=' text-2xl font-bold'>Let's Get You Closer</Text>
      <Text className=' text-2xl font-bold'>TO <Text
      className=' text-blue-500 text-2xl '>Your Ideal Home </Text></Text>
      </View>
 
      <Text className='text-[#666876]'>Login to Real Scout with Google</Text>

      <TouchableOpacity
      activeOpacity={0.7}
      className= {nativewind.button}
      onPress={move}
      >

        <View
        className=' flex-row justify-center items-center gap-3'
        >

          <Image source={icons.google}
          className=' size-7'
          />
        <Text>Sign Up with Google</Text>

        </View>
      </TouchableOpacity>

      </View>
      </LinearGradient>

    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({

})

const nativewind = {
  screen: 'flex-1  bg-[#f4f4f4]   ',
// pl-4 pr-4 p-4 
button:' mt-5 bg-white h-12  w-[85%]  rounded-2xl  justify-center items-center'
};
