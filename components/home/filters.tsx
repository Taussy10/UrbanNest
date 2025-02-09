import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '~/constants/data'

type propsType = {
    title: string
}
// {title}:propsType

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string }>()
    const [selectedCategory, setSelectedCategory] = useState(params.filter||"All")

    const handleCategoryPress = (category: string) =>{
        if (selectedCategory === category) {
            setSelectedCategory("All")
            router.setParams({filter: "All"})
            return
            
        }

        setSelectedCategory(category)
        router.setParams({filter: category})

    }


  return (
    <ScrollView 
    horizontal
showsHorizontalScrollIndicator={false}

    className= "   mb-4  w-full  gap-7 mr-8  " >
        {
            categories.map((item, index) =>
            <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={()=> handleCategoryPress(item.category)}
            // ${selectedCategory === item.category ? 'bg-primary-300': 'bg-primary-100'}
            className={`flex-col items-start mr-4      p-4     rounded-full    ${selectedCategory === item.category ? 'bg-blue-500': 'bg-primary-100'}`}

            >
 <Text className={`text-sm ${selectedCategory === item.category ?'text-white': ' text-black-300'}`}>{item.title}</Text>

            </TouchableOpacity>
            )
        }

    </ScrollView>
  )
}

export default Filters