import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router';


const TabsLayout = () => {

  return (
    <Tabs
    screenOptions={{headerShown: false}}
    >
      <Tabs.Screen name='home' />
      <Tabs.Screen name='explore' />
      <Tabs.Screen name='profile' />
    </Tabs>
   
  )
}
export default TabsLayout

const styles = StyleSheet.create({})