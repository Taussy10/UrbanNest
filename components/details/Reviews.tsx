import { StyleSheet, Text, View , Image } from 'react-native'

import React from 'react'
import icons from '~/constants/icons'

type props = {
  property: string
}

const Reviews = ({property}:props) => {
  return (
    //Review Container 
     <View>
        {/* for stars and select all */}
      
    
        {/* Container for image and name */}
        <View className=" flex-row  items-center  mb-4 gap-3 ">
          <Image source={{uri: property?.reviews?.avatar}} className=" rounded-full  size-14"   />
          <Text className='  text-xl font-bold'>{property?.reviews?.name}</Text>
          {/* actually one more thing image and name are one group  */}
        </View>
    
        <Text
        className='  text-gray-500 text-[14px] mb-4 '
        >{property?.reviews?.review}
        </Text>
    
        {/* for heart and days */}
        <View className=" flex-row items-center justify-between ">
          {/* for heart and count */}
    
          <View className=" flex-row  items-center gap-2">
            <Image source={icons.blueHeart} className="  size-7  border-blue-500  text-blue-500"

            />
            <Text>938</Text>
          </View>
    
          <Text>{property?.$createdAt.toString().slice(0,10)}

          </Text>
        </View>
        {/* Review container */}
      </View>
  )
}

export default Reviews

const styles = StyleSheet.create({})