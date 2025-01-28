import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import images from '~/constants/images';
import icons from '~/constants/icons';

type FeaturedCardProps = {
  onPress: () => void,
  starIcon: ImageSourcePropType,
  heartIcon: ImageSourcePropType
}


export const FeaturedCard = ({onPress , starIcon, heartIcon}:FeaturedCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {/* h-72 w-52 */}
      <ImageBackground source={images.newYork} className="   h-72 w-52 rounded-2xl ">
        {/* for giving gradient to Image */}
        <Image source={images.cardGradient} className=" absolute bottom-0 size-full rounded-2xl" />
        {/* for star */}
        <View style={styles.starContainer}>
          <Image source={icons.star} resizeMode="contain" className="  size-3.5 " />
          <Text className="  font-bold text-blue-500">4.8</Text>
        </View>

        {/* for image text */}
        <View style={{ position: 'absolute', bottom: 10, paddingLeft: 8, paddingRight: 8 }}>
          <Text
            className="font-rubik-extrabold text-xl  text-white"
            // won't pass one line if yeah then ...
            numberOfLines={1}>
            Merialla Villa
          </Text>
          <Text className=" text-white">New York, US</Text>

          {/* for heart */}
          <View className=" w-full flex-row items-center justify-between ">
            <Text className="font-bold text-white">$12219</Text>
            <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};





export const PropertyCard = () => {
  return (
    <View
      className=" w-44 mr-8  rounded-lg bg-[#04060F0D]  p-4
    
    ">
      {/* For image */}   {/* for star */}
    
      <ImageBackground source={images.newYork}  resizeMode= 'contain' className="  mb-3  h-48 w-40 rounded-2xl ">
     
        <View style={styles.starContainer}>
          <Image source={icons.star} resizeMode="contain" className="size-4 " />
          <Text className="  font-bold text-blue-500">4.8</Text>
        </View>
      </ImageBackground>

      {/* for texts and heart */}
      <View className=" mb-3  gap-1">
        <Text className={` font-rubik-bold  text-base text-black `}>La Grand Masion</Text>

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
