import { View, Text, Image } from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import images from '~/constants/images';

const Header = () => {
  return (
    //  bg-green-300
    <View
      className="  flex-row  items-center justify-between  mb-5 mt-5
    
    ">
      {/* bg-orange-300  cotntainer for right side image and text */}
      <View
        className="flex-row  items-center justify-between
     
     gap-2">
        {/* cotntainer for right side image  */}
        <View>
          <Image source={images.avatar} resizeMode="contain" className=" size-12  " />
        </View>

        {/* cotntainer for right side two texts  */}
        <View>
          <Text>Good Morning</Text>
          <Text>Tausif</Text>
        </View>
      </View>

      {/* cotntainer for left side notifcations  */}
      <View>
        <Image source={icons.bell} resizeMode="contain" className="  h-7 w-7 " />
      </View>
    </View>
  );
};

export default Header;
