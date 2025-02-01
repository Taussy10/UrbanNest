import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '~/constants/images';
import icons from '~/constants/icons';
import FacilitiesIcons from '~/components/details/facilities-icons';
import { useLocalSearchParams } from 'expo-router';
import { Models } from 'react-native-appwrite';
// I haven't built appbar cause need to learn about that after
// that will build it




const Details = () => {
  const params = useLocalSearchParams()

  console.log("Params from id.tsx :", params);
  
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <ScrollView>

        {/* mainGroup-1: HeaderGroup  */}
        <View
        className=' mb-6'
        >
        <ImageBackground
        source={images.newYork} className=" h-[375px] w-full"
        >
      {/* Write app bar code */}
        </ImageBackground>

        </View>

        {/* mainGroup-2: DetailsGroup: wrap it in View cause it has >1 elements(subGroups) */}
        <View className='flex-1 pl-4 pr-4   bg-white  mb-6'>
  
          {/* 1. Title & Basic Info container: it  will have 3 groups: title , stars and basic info */}
          <View
          className=' mb-4'
          >
            {/* Title */}
            <View
            className=' mb-3'
            >
              <Text className=' font-semibold text-2xl '>Modernica Apartment</Text>
            </View>

            {/*star and apartment  */}
            <View className=" flex-row gap-2 mb-3 items-center">
              {/* container for bg color rounded */}
              <View
              className="  rounded-full  bg-primary-200 p-2 "
              >
              <Text className=" font-bold  text-[12px] text-[#0061FF]  ">Apartment</Text>
              </View>


              {/* for star and text */}
              <View className=" flex-row items-center  ">
                <Image source={icons.star} className="  size-5" />
                <Text> 4.8 (1,275 reviews)</Text>
              </View>

            </View>

            {/* bed , bath 2000sqft container */}
            <View className=" flex-row items-center justify-between ">
              {/* for bed */}
              <View className=" w-24  flex-row  items-center gap-3 ">
                {/* for bed's rouneded color */}
                <View className="  rounded-full  bg-primary-200 p-2 ">
                  <Image source={icons.bed} className="  size-4 " />
                </View>

                <Text>8 Beds</Text>
              </View>

              {/* bed , bath 2000sqft */}
            </View>

            {/* Name group */}
          </View>



          {/* Agent Container: will have text , and 2 groups 1. pfp &name 2. icons  */}
          <View className=" mb-4">
            {/* Has two subgroups: Agent contact with name and overview */}
            <Text className=' text-2xl mb-2  font-bold'>Agent</Text>

            {/* for pfp&name and contact so will have two groups */}
            <View className="  flex-row  items-center justify-between ">
              {/* has 3 groups  Image , name and  icons */}

{/* for pfp and name */}
              <View className=" flex-row  items-center  justify-between   gap-4 ">
                {/* for image: TBH honest if single elemnt the don't wrap in 
container */}
                <View>
                  <Image source={images.avatar} className="  size-16" />
                </View>

                {/* for name: Two elements but if you remove container then they will 
flow row and we don't want that that's why wraped
*/}
                <View>
                  <Text>Natasya Wilodra</Text>
                  <Text>Owner</Text>
                </View>

                {/* actually one more thing image and name are one group  */}
              </View>

              {/* for icons */}
              <View className="flex-row  items-center  justify-between  gap-2">
                <Image source={icons.chat} className=" size-7" />
                <Image source={icons.phone} className=" size-7" />
              </View>

              {/* for name profile and contact */}
            </View>

            {/* Agent Container */}
          </View>

              {/* Overview container: single  element  */}
            <View className=" mb-4">
              <Text className='text-2xl mb-1  font-bold'>Overview</Text>
              <Text className='  text-gray-500 text-[16px]'>
                Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and
                city views. Minutes from downtown, dining, and transit.
              </Text>
            </View>

          {/* for facilites container */}
          <View className=" mb-4  ">
            <Text className=' text-2xl mb-3  font-bold' >Facilities</Text>

            {/* this method isn't great for aligining will look for diff methods */}
            <View className=" flex-row mb-3">
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
            </View>

            <View className="  flex-row">
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
              <FacilitiesIcons name="Car Parking" icon={icons.carPark} />
            </View>

         </View>

{/* Gallery container */}
          <View className=' mb-4'>
              <Text className=' text-2xl mb-3  font-bold'>Gallery</Text>

              <Image
                source={images.newYork}
                // resizeMode="contain"
                className=" w-48 h-48  rounded-2xl "
              />
            </View>


          {/* Location container */}
          <View className=' mb-4'>
            <Text className=' text-2xl mb-1  font-bold'>Location</Text>
            {/* address container */}
            <View className=" flex-row gap-2 items-center mb-2 ">
              <Image source={icons.location} className=" size-7" />
              <Text>Grand City St. 100, New York, United States</Text>
            </View>

            {/* Map */}
            <Image source={images.map} resizeMode="contain" className="  h-52 w-full " />
          </View>

          {/* for reviews */}
          <View
          className=' mb-6'>
            {/* for stars and select all */}
            <View className=" flex-row items-center mb-2  justify-between">
              <View className=" flex-row items-center ">
                <Image source={icons.star} className="  size-5" />
                <Text className="  font-bold"> 4.8 (1,275 reviews)</Text>
              </View>

              <Text className="  font-bold  text-primary-300">Select All</Text>
            </View>

            {/* Container for image and name */}
            <View className=" flex-row  items-center  mb-2 gap-3 ">
              <Image source={images.avatar} className="  size-14" />
              <Text className='  text-xl font-bold'>Natasya Wilodra</Text>
              {/* actually one more thing image and name are one group  */}
            </View>

            <Text
            className='  text-gray-500 text-[14px] mb-3'
            >
              The apartment is very clean and modern. I really like the interior design. Looks like
              I'll feel at home 😍
            </Text>

            {/* for heart and days */}
            <View className=" flex-row items-center justify-between ">
              {/* for heart and count */}

              <View className=" flex-row  items-center gap-2">
                <Image source={icons.blueHeart} className="  size-7  border-blue-500  text-blue-500" />
                <Text>938</Text>
              </View>

              <Text>6 days ago</Text>
            </View>
            {/* Review container */}
          </View>

          {/* For price and Button */}
          <View className=" flex-row items-center justify-between ">
            {/* why have we put  Price text and number inside container ? Look in parent there is flex row then children will flex row but we don't want that 
            that's why we have wrapped inside view and view by default flex-col*/}
            <View>
              <Text className=" text-xl  font-semibold text-gray-500  ">Price</Text>
              <Text className=" text-2xl  font-bold  text-[#0061FF]  ">$17821</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              className="  w-40 p-3 flex-row   items-center justify-center rounded-full bg-[#0061FF]   ">
              <Text className=" font-bold text-xl text-white  ">Book Now</Text>
            </TouchableOpacity>
          </View>

          {/* Details container */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});


