import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router';
import icons from '~/constants/icons';
import images from '~/constants/images';

type tabIconType = {
icon: any,

title: string,
color: string,

}

const TabIcon = ({icon ,  title ,color }:tabIconType) => {
  return(
    <View className=' flex-col items-center w-10   pt-5'>
      <Image source={icon}
      className=' size-7 '
      tintColor={color}
      />
      <Text className=' text-[10px]'>{title}</Text>
    </View>
  )
}


const TabsLayout = () => {

  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        borderTopColor: '#0061ff1a',
        borderTopWidth: 1,
        minHeight: 70,
      }


    }}
    >
      <Tabs.Screen 

      options={{
        // by default file name will attached so for change it use
        // title key
           
        tabBarIcon: ({ color}) => (
        <TabIcon 
        icon= {icons.home}
        title = "Home"
        color = {color}

        />
         
        )

      }}
      name='home' />

      <Tabs.Screen name='explore' 
       options={{
                   

        tabBarIcon: ({color}) => (
        <TabIcon 
        icon= {icons.search}
        title='Explore'  
        color={color}

        
        />
         
        )

      }}
      />
      <Tabs.Screen name='profile'
       options={{
        title: "Profile",        

        tabBarIcon: ({focused , color}) => (
        <TabIcon 
        icon= {icons.person}
        title = "Profile"
        color={color}

        
        />
         
        )

      }}
      />
    </Tabs>
   
  )
}
export default TabsLayout

const styles = StyleSheet.create({})