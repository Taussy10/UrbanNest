import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '~/constants/images';
const Profile = () => {
  return (
    <SafeAreaView className={nativewind.screen}>
      {/* For images */}
      <View className="  items-center justify-center bg-green-300">
        <Image source={images.avatar} className="  size-40 rounded-full" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

const nativewind = {
  screen: 'flex-1 pl-4 pr-4 p-4 bg-white ',
};
