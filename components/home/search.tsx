import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '~/constants/icons'

const Search = () => {
  return (
    <View
    className={Styles.component}
    >
{/* left containerr */}
      <View
          className=' mt-4 flex-row  gap-2  '
      >
      <Image 
source={icons.search}
className="  h-7 w-7 "
/>
<Text>Search something</Text>

      </View>

{/* right container */}
      <View>
<Image 
source={icons.filter}
className="  h-7 w-7 "
/>
      </View>

    </View>
  )
}

export default Search

const Styles = {
    component: ' mt-4 flex-row justify-between items-center bg-green-300 pb-2 pr-2  pl-2 rounded-lg'
}