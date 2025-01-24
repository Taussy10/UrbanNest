import { StyleSheet, Text, View , Image, FlatList } from 'react-native'
import React from 'react'

type propsType = {
    name: string
    icon: any
}

const FacilitiesIcons = ({name , icon}:propsType) => {
    const data = [
        {
            name: name,
            icon: icon
        }
    ]
  return (
    // container for icons image and text
  
  
 <View
    className='  flex-col items-center  w-24  '
    >
        {/* container for icons */}
      <View
      className=' justify-center items-center  bg-primary-200 size-14  rounded-full p-2 mb-1 '
      >
      <Image 
        source={icon}
        className='  size-8 rounded-full'
        />
      </View>
      <Text >{name}</Text>
    </View>

 
    

    

  )
}

export default FacilitiesIcons

