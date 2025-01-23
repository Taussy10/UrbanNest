import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '~/constants/images'
import icons from '~/constants/icons'
import FacilitiesIcons from '~/components/details/facilities-icons'

// I haven't built appbar cause need to learn about that after 
// that will build it 

const Details = () => {
  return (
    <SafeAreaView
    className=' flex-1 bg-white'
    >
      <ScrollView>
        <Image source={images.newYork} 
        className=' h-[375px] w-full'
        />

        {/* Detail conaier */}
    <View
        className={nativewind.screen}

    >
      
      {/* Name group */}
      <View>

        {/* name */}
      <View>
        <Text>Modernica Apartment</Text>
      </View>


 {/*star and apartment  */}
 <View
 className=' flex-row gap-2'
 >
  <Text
  className=' text-[#0061FF]  font-bold  '
  >Aparrment</Text>

  {/* for star and text */}

  <View
  className=' flex-row '
  >
 <Image 
 source={icons.star}
 className='  size-5'
 />
 <Text> 4.8 (1,275 reviews)</Text>
  </View>

 </View>


{/* bed , bath 2000sqft container */}
 <View
 className=' flex-row justify-between items-center  pr-2 '
 >


{/* for bed */}
<View
className=' flex-row  items-center  bg-green-500 w-24 gap-3'>

{/* for bed's rounede color */}
<View
className='  bg-green-300   rounded-full p-2 '
>
<Image 
  source={icons.bed}
  className='  size-4 rounded-full'

  />
</View>

<Text>8 Beds</Text>

</View>

{/* for bath */}
<View
className=' flex-row  items-center  bg-green-500 w-20'>

{/* for bed's rounede color */}
<View
className='  bg-green-300   rounded-full p-2'
>
<Image 
  source={icons.bed}
  className='  size-4 rounded-full'

  />
</View>

<Text>8 Beds</Text>

</View>

{/* for 200sqft */}

<View
className=' flex-row  items-center  bg-green-500 w-20'>

{/* for bed's rounede color */}
<View
className='  bg-green-300   rounded-full p-2'
>
<Image 
  source={icons.bed}
  className='  size-4 rounded-full'

  />
</View>

<Text>8 Beds</Text>

</View>


{/* bed , bath 2000sqft */}
 </View>

  {/* Name group */}
  </View>



{/* Agent Container */}
<View
className='mt-5 '
>
{/* Has two subgroups: Agent contact with name and overview */}

<Text>Agent</Text>


{/* for name profile and contact */}
<View
className=' flex-row  items-center  justify-between mt-2 '
>

{/* has 3 groups  Image , name and  icons */}

{/* actually one more thing image and name are one group  */}
<View
className=' flex-row  items-center  justify-between   gap-4 '
>

{/* for image: TBH honest if single elemnt the don't wrap in 
container */}
<View>
<Image
source={images.avatar}
className='  size-16'
/>
</View>

{/* for name: Two elements but if you remove container then they will 
flow row and we don't want that that's why wraped
*/}
<View>
  <Text>Natasya Wilodra</Text>
  <Text>Owner</Text>
</View>

{/* actually one more thing image and name are one group  */}
</View>


{/* for icons */}
<View className='flex-row  items-center  justify-between  gap-2'>
  <Image  source={icons.chat}
  className=' size-7'
  />
  <Image source={icons.phone} 
  className=' size-7'
  />
</View>

{/* for name profile and contact */}
</View>



{/* for overview: single singe element  */}
<View
className=' mt-4'
>
<Text>Overview</Text>
<Text>Sleek, modern 2-bedroom apartment with open living space, high-end finishes, 
  and city views. Minutes from downtown, dining, and transit.</Text>
</View>



{/* Agent Container */}

</View>


{/* for facilites container */}
<View
className=' mt-5  '
>
  <Text>Facilities</Text>


{/* this method isn't great for aligining will look for diff methods */}
<View
className=' flex-row'>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
</View>

<View
className=' flex-row mt-5'>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
</View>


{/* <FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/>
<FacilitiesIcons name="Car Parking" icon={icons.carPark}/> */}


{/* Curretly I've put this group in Facilities container cause it's bhaving
unpextedly let it be ok then will use it  */}

<View>

<Text>Gallery</Text>

<Image 
source={images.newYork}
resizeMode= 'contain'
className="   size-52 rounded-2xl "
/>
</View>

</View>




{/* Location container */}
<View>
  <Text>Location</Text>

  {/* address container */}
  <View
  className=' flex-row gap-2'
  >
 <Image source={icons.location} 
 className=' size-7'
 />
  <Text>Grand City St. 100, New York, United States</Text>
  </View>

  {/* Map */}
  <Image source={images.map} 
  resizeMode= 'contain'
  className='  w-full h-52 '
  />
</View>



{/* for reviews */}
<View>

{/* for stars and review select all */}
<View
className=' flex-row items-center  justify-between'
>
<View
  className=' flex-row '
  >
 <Image 
 source={icons.star}
 className='  size-5'
 />
 <Text className='  font-bold'> 4.8 (1,275 reviews)</Text>
  </View>

  <Text className=' text-blue-500 font-bold'>Select All</Text>
 </View>


{/* Container for image and name */}
 <View
className=' flex-row  items-center  gap-3 '>

<Image
source={images.avatar}
className='  size-14'
/>

<Text>Natasya Wilodra</Text>


{/* actually one more thing image and name are one group  */}
</View>


<Text>The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home 😍</Text>

{/* for heart and days */}
<View
className=' flex-row justify-between items-center'
>
{/* for heart and count */}

<View
className=' flex-row  items-center gap-2'
>
  <Image
source={icons.heart}
  className='  size-7  bg-blue-500'/>
  <Text>938</Text>
</View>

<Text>6 days ago</Text>

</View>
{/* Review container */}
</View>



{/* For price and Button */}
<View
className=' flex-row  justify-between items-center'
>
  {/* Price text and number */}
<View>
<Text className=' font-semibold  text-xl text-gray-500  '>Price</Text>
<Text className=' font-bold  text-2xl  text-[#0061FF]  '>$17821</Text>
</View>


<TouchableOpacity
activeOpacity={0.8}
className='  w-44 p-5  bg-[#0061FF]   rounded-full justify-center items-center'
>
  <Text className=' text-white font-bold'>Book Now</Text>
</TouchableOpacity>
</View>

    {/* Details container */}
    </View>      


      </ScrollView>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({})

const nativewind = {
  screen: 'flex-1 pl-4 pr-4 p-4  bg-[#ffffff] ',

};