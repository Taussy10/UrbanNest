import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import images from '~/constants/images';
import icons from '~/constants/icons';
import { Models } from 'react-native-appwrite';




export const FeaturedCard = ({onPress , item:{image , rating,address, price} }:props) => {
  
  return (
    <TouchableOpacity className=' mb-6' activeOpacity={0.8} onPress={onPress}>
      {/* h-72 w-52 */}
      <ImageBackground source={{uri: image}} className="   h-72 w-52 rounded-2xl ">
        {/* for giving gradient to Image */}
        <Image source={images.cardGradient} className=" absolute bottom-0 size-full rounded-2xl" />
        {/* for star */}
        <View style={styles.starContainer}>
          <Image source={icons.star} resizeMode="contain" className="  size-3.5 " />
          <Text className="  font-bold text-blue-500">{rating}</Text>
        </View>

        {/* for image text */}
        <View style={{ position: 'absolute', bottom: 10, paddingLeft: 8, paddingRight: 8 }}>
          <Text
            className="font-rubik-extrabold text-xl  text-white"
            // won't pass one line if yeah then ...
            numberOfLines={1}>
            {/* {item?.name} */}
          </Text>
          <Text className=" text-white">{address}</Text>

          {/* for heart */}
          <View className=" w-full flex-row items-center justify-between ">
            <Text className="font-bold text-white">${price}</Text>
            <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
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

type props = {
  onPress: () => void
  item: Models.Document;

}

export const PropertyCard = ({onPress , item:{image , rating,address, price , name}  }:props) => {

  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={onPress}
    className=' bg-white w-44  rounded-2xl  shadow-2xl  mb-5  shadow-[#04060F0D]'>
     <ImageBackground  source={{uri: image}}
     resizeMode= 'cover'
     className='  h-40  w-full rounded-2xl  mb-2'
     >
      {/* container for star */}
         <View style={styles.starContainer}>
         <Image source={icons.star} resizeMode="contain" className="size-4 " />
      <Text className="  font-bold text-blue-500">{rating}</Text>
       </View>
      </ImageBackground>



<View className=' p-2'>
           <View className=" mb-3    gap-1">
         <Text 
         
         className={` font-rubik-bold  text-base text-black `}>{name}</Text>

       <Text 
       numberOfLines={1}
       className={` text-gray-400 `}>{address}</Text>
     </View>
       <View className=" flex-row  items-center justify-between ">
         <Text className="font-bold text-blue-500">${price}</Text>
         <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
       </View> 
       </View>
    </TouchableOpacity>
  )
}

