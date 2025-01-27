import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import images from '~/constants/images';
import icons from '~/constants/icons';
import { useRouter} from 'expo-router';

export const FeaturedCard = () => {
    const router = useRouter()
  return (
     
          
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>router.push('/details')}>

        <ImageBackground source={images.newYork} className="  h-72 w-52 rounded-2xl ">

{/* for giving gradient to Image */}
<Image
source={images.cardGradient}
className=' size-full rounded-2xl absolute bottom-0'
/>
          {/* for star */}
          <View style={styles.starContainer}>
            <Image source={icons.star} resizeMode="contain" className="  size-3.5 " />
            <Text className="  font-bold text-blue-500">4.8</Text>
          </View>


          {/* for image text */}
          <View style={{ position: 'absolute', bottom: 10, paddingLeft: 8, paddingRight: 8 }}>
            <Text className= "text-white font-rubik-extrabold  text-xl"
            // won't pass one line if yeah then ...
            numberOfLines={1}
            >Merialla Villa</Text>
            <Text className=' text-white'>New York, US</Text>

            {/* for heart */}
            <View className=" w-full flex-row items-center justify-between ">
              <Text className= "font-bold text-white">$12219</Text>
              <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
  )
}




export const PropertyCard = () => {
  return (
    <View
      className=" w-52  rounded-lg bg-[#04060F0D]  p-4
    
    ">
      {/* For image */}
      <ImageBackground source={images.newYork} className="  h-48  w-44 rounded-2xl mb-3 ">
        {/* for star */}
        <View style={styles.starContainer}>
          <Image source={icons.star} resizeMode="contain" className="size-4 " />
          <Text className="  font-bold text-blue-500">4.8</Text>
        </View>
      </ImageBackground>


      {/* for texts and heart */}
      <View 
      className=' gap-1  mb-3'>

      <Text className={` text-black  font-rubik-bold text-base `}>La Grand Masion</Text>

      <Text className={` text-gray-400 `}>Tokyo ,Japan</Text>

</View>

      <View className=" flex-row  items-center justify-between ">
        <Text className="font-bold text-blue-500">$12219</Text>
        <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  starContainer: {
    position: 'absolute',
    right: 8,
    top: 7,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFFE5',
    borderRadius: 16,
  },
});

const nativewind = {
  text: 'text-white',
};












