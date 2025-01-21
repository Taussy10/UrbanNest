import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import images from '~/constants/images';
import icons from '~/constants/icons';
const Featured = () => {
  return (
    // container for component
    <View>
      {/* Heading */}
      <View className=" flex-row justify-between ">
        <Text>Featured</Text>
        <Text className="text-blue-500">See All</Text>
      </View>

      {/* container for image */}
      <View>
        <ImageBackground source={images.newYork} className="  h-72    w-52 rounded-2xl ">

          {/* for star */}
          <View style={styles.starContainer}>
            <Image source={icons.star} resizeMode="contain" className="  h-7 w-7 " />
            <Text className="  font-bold text-blue-500">4.8</Text>
          </View>


          {/* for image text */}
          <View style={{ position: 'absolute', bottom: 10, paddingLeft: 8, paddingRight: 8 }}>
            <Text className={`${nativewind.text}  font-bold `}>Merialla Villa</Text>
            <Text className={nativewind.text}>New York, US</Text>

            {/* for heart */}
            <View className=" w-full flex-row items-center justify-between ">
              <Text className={`${nativewind.text} font-bold `}>$12219</Text>
              <Image source={icons.heart} resizeMode="contain" className="  h-7 w-7 " />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Featured;

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
    backgroundColor: 'lightgrey',
    borderRadius: 8,
  },
});

const nativewind = {
  text: 'text-white',
};
