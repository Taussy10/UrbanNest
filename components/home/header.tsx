import { View, Text, Image } from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import images from '~/constants/images';

const Header = () => {
  return (

    // header container(having 2 groups 1.Header-pfp-name , 2. Notification)
    <View
      className="  flex-row  items-center justify-between  mb-5
    ">

      {/* subGroup1: Header-pfp-name cotntainer for right side image and text */}
      <View
        className="flex-row  items-center  gap-2 ">

      <Image source={images.avatar} resizeMode="contain" className=" size-14  " />
        
        {/* we have to wrap in container cause we want them to flex-col and 
        by default views are flex-col*/}
        <View>
          <Text className=' text-[14px] text-gray-500'>Good Morning</Text>
          <Text className=' text-xl font-bold  text-black'>John Doe</Text>
        </View>
      </View>

      {/* mainGroup2: notifcation  we don't have any use of container but let it be here
      for no reason*/}
      <View>
        <Image source={icons.bell} resizeMode="contain" className="  h-7 w-7 " />
      </View>
    </View>
  );
};

export default Header;
