import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropertyCard } from './cards'
import Filters from './filters'

const Recom = () => {
  return (
    // Component container
    <View className='     mb-72'>

      {/* will have 3 groups
      1. Heading , Category , 3 Image
      */}
             {/*1. Heading Container */}
              <View className=" flex-row justify-between items-center  mb-3">
                     <Text className=' text-2xl  font-semibold'>Featured</Text>
                     <Text className="text-blue-500 text-xl font-bold">See All</Text>
                   </View>
    
    {/* 2. categories Container */}
    {/* don't know why gap isn't working */}
    {/* <View className='  flex-row  gap-5 items-center'>
    <Filters title="All" />
    <Filters title="House" />
    <Filters title="Villa" />
    <Filters title="House" />
   

   
    </View> */}
    <Filters title="Villa" />
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


  