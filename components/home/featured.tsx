import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '~/constants/images';
import icons from '~/constants/icons';
import { useRouter } from 'expo-router';
import { FeaturedCard } from './cards';

const Featured = () => {
  const router = useRouter()
  const onPress = () => {
      
  }
  return (

    // container for component
    <View className=' mb-5'>
      {/* will have two comps 1.Texts and 2nd Image */}

      {/* Texts container */}
      <View className=" flex-row justify-between items-center  mb-3">
        <Text className=' text-2xl   font-rubik-bold  '>Featured</Text>
        <Text className="text-blue-500 text-xl font-rubik-bold ">See All</Text>
      </View>
<FeaturedCard onPress={onPress} />
     
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
    backgroundColor: 'white',
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

const nativewind = {
  text: 'text-white',
};
