import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import icons from '~/constants/icons';
import images from '~/constants/images';

const PropertyCard = () => {
  return (
    <View
      className=" w-52  rounded-lg bg-[#04060F0D]  p-4
    
    ">
      {/* For image */}
      <ImageBackground source={images.newYork} className="  h-48  w-44 rounded-2xl ">
        {/* for star */}
        <View style={styles.starContainer}>
          <Image source={icons.star} resizeMode="contain" className="  h-7 w-7 " />
          <Text className="  font-bold text-blue-500">4.8</Text>
        </View>
      </ImageBackground>

      {/* for texts and heart */}
      <Text className={`${nativewind.text}  text-black `}>La Grand Masion</Text>

      <Text className={` text-gray-400 `}>Tokyo ,Japan</Text>

      <View className=" flex-row  items-center justify-between">
        <Text className="font-bold text-blue-500">$12219</Text>
        <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
      </View>
    </View>
  );
};

export default PropertyCard;

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
