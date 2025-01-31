import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getProperties, yo } from '~/appwrite/appwrite'
import { useEffect } from 'react'

const Test = () => {
 useEffect(()=> {
  console.log("after mounted");
  
 },[])
 console.log("Rendered");
 useEffect(()=> {
 console.log("YO :",yo());
 },[])
  // to get props you can do this 
  // console.log("Proprties from test.tsx no async await :", getProperties());
  // wait a min when I've resolved promise in appwrite.ts then why again ?
  // basically dude it's gives promise so you have to resolve it to use 
  // whether in test.tsx , component.tsx , mobile.tsx
  // otherwise it will print promise object:{ _h: 0, _i: 0, _j: null, _k: null }

  // so , have to reseolve like this 
  // but showing undefined
  // const fetchProps = async() => {
  //   const result = await getProperties()
  //   console.log("From test.tsx no useEffect" ,result);
  // }
  // fetchProps()

  // That method is bad cause  React re-renders, fetchProps() runs again and again
// This can cause multiple unnecessary API calls and performance issues.
// but this also showing undefined that's ok cause we use useEffect for perfomance issue
  useEffect(() => {
  // so , have to reseolve like this 
  const fetchProps2 = async() => {
    const result = await getProperties()
    // console.log("From test.tsx with useEffect" ,result);
  }
  fetchProps2()
  }, [])




 
  return (
    <SafeAreaView className=' flex-1 justify-center items-center'>
      <Text>Test</Text>
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({})