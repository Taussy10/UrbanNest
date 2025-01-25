import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router';
import icons from '~/constants/icons';
import images from '~/constants/images';

const TabIcon = ({icon}) => {
  return(
    <View className=' items-center'>
      <Image source={icon}
      className=' size-7 '
      />
    </View>
  )
}


const TabsLayout = () => {

  return (
    <Tabs
    screenOptions={{headerShown: false}}
    >
      <Tabs.Screen 

      options={{
        // by default file name will attached so for change it use
        // title key
       title: "Home",        
        tabBarIcon: ({focused , color}) => (
        <TabIcon 
        icon= {icons.home}
        
        />
         
        )

      }}
      name='home' />

      <Tabs.Screen name='explore' 
       options={{
               title: "Explore",        

        tabBarIcon: ({focused}) => (
        <TabIcon 
        icon= {icons.search}
        
        />
         
        )

      }}
      />
      <Tabs.Screen name='profile'
       options={{
        title: "Profile",        

        tabBarIcon: ({focused}) => (
        <TabIcon 
        icon= {icons.person}
        
        />
         
        )

      }}
      />
    </Tabs>
   
  )
}
export default TabsLayout

const styles = StyleSheet.create({})