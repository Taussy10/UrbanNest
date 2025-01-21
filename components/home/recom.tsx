import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropertyCard from './PropertyCard'

const Recom = () => {
  return (
    <View>
             {/* Heading */}
              <View className=" flex-row justify-between ">
                <Text>Our Recommendation</Text>
                <Text className="text-blue-500">See All</Text>
              </View>
    
    {/* for selecting categories */}
    <View 
    className={nativewind.category}
    >
 <Text className={`${nativewind.text}  font-bold  `}>House</Text>
    </View>


{/* Image card */}
<PropertyCard />
    </View>
  )
}

export default Recom

const styles = StyleSheet.create({})

const nativewind = {
    text: 'text-white',
    category: " w-20 rounded-3xl h-12 p-1 bg-blue-500 flex-row justify-center items-center"
  }
  