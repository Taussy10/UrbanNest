import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropertyCard } from './cards'

const Recom = () => {
  return (
    // Component container
    <View className='  '>

      {/* will have 3 groups
      1. Heading , Category , 3 Image
      */}
             {/*1. Heading Container */}
              <View className=" flex-row justify-between items-center  mb-3">
                     <Text className=' text-2xl  font-semibold'>Featured</Text>
                     <Text className="text-blue-500 text-xl font-bold">See All</Text>
                   </View>
    
    {/* 2. categories Container */}
    <View 
    className= " w-20 mb-3 rounded-3xl h-12 p-1 bg-blue-500 flex-row justify-center items-center" >
 <Text className=" font-bold text-white  ">House</Text>
    </View>


{/* Image card */}
<View className=' flex  flex-row mr-10 items-center'>
<PropertyCard/> 
<PropertyCard/> 
</View>

    </View>
  )
}

export default Recom

const styles = StyleSheet.create({})


  