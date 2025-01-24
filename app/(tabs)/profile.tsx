import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '~/constants/images';
import icons from '../../constants/icons';

const Profile = () => {
  return (
    <SafeAreaView className='flex-1 pl-4 pr-4 p-4 bg-white '>
      <ScrollView>
        {/* For images */}
        <View className="  flex-col items-center justify-center gap-3 ">
          <Image source={images.avatar} className="  size-32 rounded-full" />
          <Text>John Doe</Text>
        </View>

        {/* for horizontal line */}
        {/* <View className=" mt-8 border-b border-t  border-[#E6F0FF]"> */}
        <View style={{ borderBottomColor: '#E6F0FF',}}>


          {/* container for payments and booking */}
          <View className=" flex-row items-center justify-between p-2">
            <View className=" flex-row  items-center gap-2">
              <Image source={icons.calendar} resizeMode="contain" className="  h-7 w-7 " />
              <Text>My Booking</Text>
            </View>

            <View>
              <Image source={icons.rightArrow} resizeMode="contain" className="  h-7 w-7 " />
            </View>
          </View>


          <View className=" flex-row items-center justify-between p-2">
            <View className=" flex-row  items-center gap-2">
              <Image source={icons.wallet} resizeMode="contain" className="  h-7 w-7 " />
              <Text>Payments</Text>
            </View>

            <View>
              <Image source={icons.rightArrow} resizeMode="contain" className="  h-7 w-7 " />
            </View>
          </View>
        </View>


{/* for logout */}
 {/* Logout */}


 <TouchableOpacity 
 activeOpacity={0.7}
 className=" flex-row items-center gap-2 mt-4">
 <Image source={icons.logout} resizeMode="contain" className="  h-7 w-7 " />
<Text className=' text-red-500 font-semibold text-xl'>Logout</Text>
 </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

