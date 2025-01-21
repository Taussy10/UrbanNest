import { StyleSheet, Text, View, Image } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const TabsLayout = () => {

  return (
    <Stack
    screenOptions={{headerShown: false}}>
      <Stack.Screen name='home' />
      <Stack.Screen name='explore' />
      <Stack.Screen name='profile' />
    </Stack>
   
  )
}
export default TabsLayout

const styles = StyleSheet.create({})