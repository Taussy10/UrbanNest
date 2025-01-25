import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router';
import icons from '~/constants/icons';




const TabsLayout = () => {

  return (
    <Tabs
    screenOptions={{headerShown: false}}
    >
      <Tabs.Screen 
      options={{
           tabBarActiveTintColor: 'green',
        // tintColor={focused ? "#0061FF" : "#666876"},
        tabBarIcon: ({focused}) => (
          
            <Image source={icons.home} 
            className={'size-7'}

            />
         
        )

      }}
      name='home' />
      <Tabs.Screen name='explore' />
      <Tabs.Screen name='profile' />
    </Tabs>
   
  )
}
export default TabsLayout

const styles = StyleSheet.create({})