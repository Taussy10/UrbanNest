
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '~/components/home/header'
import Search from '~/components/home/search'
import Recom from '~/components/home/recom'
import PropertyCard from '~/components/home/PropertyCard'
const Explore = () => {
  return (
    <SafeAreaView>
      <ScrollView
       showsVerticalScrollIndicator= {false}
       >

      <Header />
   <Search />
    


    
    {/* for selecting categories */}
    <View 
    className={nativewind.category}
    >
 <Text className={`${nativewind.text}  font-bold  `}>House</Text>
    </View>

<Text>Found 182 Apartments</Text>
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