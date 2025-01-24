
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '~/components/home/header'
import Search from '~/components/home/search'
import Recom from '~/components/home/recom'
import PropertyCard from '~/components/home/PropertyCard'
const Explore = () => {
  return (
    <SafeAreaView
    className='flex-1 pl-4 pr-4 p-4 bg-white '
    >
      <ScrollView
       showsVerticalScrollIndicator= {false}
       >

      <Header />
   <Search />
    


    
    {/* for selecting categories */}
    <View 
       className= " w-20 mb-3 rounded-3xl h-12 p-1 bg-blue-500 flex-row justify-center items-center" >
    <Text className=" font-bold text-white  ">House</Text>
       </View>

<Text className=' text-xl font-semibold mb-5 '>Found 182 Apartments</Text>
{/* Image card */}
<PropertyCard />
      </ScrollView>

    </SafeAreaView>
  )
}

export default Explore
const nativewind = {
  text: 'text-white',
  category: " w-20 rounded-3xl h-12 p-1 bg-blue-500 flex-row justify-center items-center"
}

const styles = StyleSheet.create({})