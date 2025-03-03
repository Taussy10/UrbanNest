import {
  FlatList, Image, ScrollView, Text,TouchableOpacity,View,Dimensions,Platform,ImageBackground,
  Pressable,} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "~/constants/icons";
import images from "~/constants/images";
import { useAppwrite } from "~/hooks/useAppwrite";
import { getPropertyDetails } from "~/appwrite/appwrite";
import Reviews from "~/components/details/reviews";
import AntDesign from '@expo/vector-icons/AntDesign';
const Details = () => {
 
    const {id} = useLocalSearchParams<{id?: string}>()
  
    const { data: property } = useAppwrite({
      fn: getPropertyDetails,
      params: {
        id: id!,
      },
    });
  
    console.log("Property Details :" , property);
    
  
  
  
  return ( 
  <SafeAreaView className=" flex-1 bg-white">
      <ScrollView
     showsVerticalScrollIndicator={false}
      >
        
    {/* mainGroup-1: For Image and Header*/}
    <View
            className=' mb-6'>
              
            <ImageBackground
            source= {{uri: property?.image}} className=" h-[375px] w-full"
            >
    
    {/* Top Navigation */}
    <View className=" mt-2 flex-row items-center justify-between   px-4">
      
<Pressable onPress={() => router.back()}>
    {/* <Image  source={icons.backArrow}
    className=" size-7 "/> */}
    <AntDesign name="arrowleft" size={24} color={"white"}  />
</Pressable>

      <AntDesign name="hearto" size={24} color="white" />
    </View>

          {/* Write app bar code */}
            </ImageBackground>
            
            </View>



     {/* mainGroup-2: DetailsGroup: wrap it in View cause it has >1 elements(subGroups) */}
     <View className='flex-1 px-4   bg-white  '>
      
      {/* 1. Title & Basic Info container: it  will have 3 groups: title , stars and basic info */}
      <View
      className=' mb-6'
      >
        {/* Title */}
        <View
        className=' mb-4'
        >
          <Text className=' font-semibold text-2xl '>{property?.name}</Text>
        </View>
    
        {/*For star and Type   */}
        <View className=" flex-row gap-2 mb-4 items-center">
          {/* container for bg color rounded */}
          <View
          className="  rounded-full  bg-primary-200 p-2 "
          >
          <Text className=" font-bold  text-[12px] text-[#0061FF]  ">{property?.type}</Text>
          </View>
    
    
          {/* for star and text */}
          <View className=" flex-row items-center  ">
            <Text className=" mr-1"> {property?.rating}</Text>
            <Image source={icons.star} className="  size-5" />

          </View>
    
        </View>
    
        {/* bed , bath 2000sqft container */}
        <View className=" flex-row items-center   gap-5">
    
          {/* for bed */}
          <View className=" w-24  flex-row  items-center gap-3 ">
            {/* for bed's rouneded color */}
            <View className="  rounded-full  bg-primary-200 p-2 ">
              <Image source={icons.bed} className="  size-4 " />
            </View>
    
            <Text>{property?.bedrooms} beds</Text>
          </View>
          <View className=" w-24  flex-row  items-center gap-3 ">
            {/* for bed's rouneded color */}
            <View className="  rounded-full  bg-primary-200 p-2 ">
              <Image source={icons.bath} className="  size-4 " />
            </View>
    
            <Text>{property?.bedrooms} bath</Text>
          </View>
          <View className=" w-24  flex-row  items-center gap-3 ">
            {/* for bed's rouneded color */}
            <View className="  rounded-full  bg-primary-200 p-2 ">
              <Image source={icons.area} className="  size-4 " />
            </View>
            <Text>8 {property?.area} sqft</Text>
          </View>
    
          {/* bed , bath 2000sqft */}
        </View>
    
        {/* Name group */}
      </View>
    
    
    
      {/* Agent Container: will have text , and 2 groups 1. pfp &name 2. icons  */}
      <View className=" mb-6">
        {/* Has two subgroups: Agent contact with name and overview */}
        <Text className=' text-2xl mb-4 font-bold'>Agent</Text>
    
        {/* for pfp&name and contact so will have two groups */}
        <View className="  flex-row  items-center justify-between ">
          {/* has 3 groups  Image , name and  icons */}
    
    {/* for pfp and name */}
          <View className=" flex-row  items-center  justify-between   gap-4 ">
            {/* for image: TBH honest if single elemnt the don't wrap in 
    container */}
            <View className='rounded-full'>
              <Image source={{uri: property?.agent?.avatar}} className=" rounded-full  size-16" />
            </View>
    
            {/* for name: Two elements but if you remove container then they will 
    flow row and we don't want that that's why wraped
    */}
            <View>
              <Text>{property?.agent?.name}</Text>
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
    
          {/* Overview(of property) container: single  element  */}
        <View className=" mb-6 ">
          <Text className='text-2xl mb-1  font-bold'>Overview</Text>
          <Text className='  text-gray-500 text-[16px]'>
           {property?.description}
          </Text>
        </View>
    
      {/* for facilites container */}
      <View className=" mb-6  ">
        <Text className=' text-2xl mb-4  font-bold' >Facilities</Text>
    
    
    
 

{/* We can't use Flatlist cause we have to use ScrollView 
but flatlist in vertical but with numcols and vertical can't happen possible
also can't use ScrollView and Flatlist in same orientation so will use array.map 
*/}


{/* How we build it using array */}
{/* Firstly gave full width: if you don't write it will still take full width */}
{/* flex wrap is use for if it exceed more than width then move to row  */}
<View className="flex-row flex-wrap  w-full  justify-between">
  {/* index is given by map method and it give it each element */}
      {/* {property?.facilities.map((item:string, index:number) => { */}
        {property?.facility.map((item:string, index:number)=>{
        console.log("Item & index :",item , index);
        return(
          // View for each item taking 25% space of full width: so in one row 4 items 
          // can display
        <View key={index} className="items-center  w-1/4   ">
          <View className="bg-primary-200 size-16 rounded-full p-4 mb-2">
            <Image
              source={{uri: item?.icon}}
              className="size-8 rounded-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-center   text-[13px]  font-bold">{item.title.slice(0,7)}..</Text>
        </View>
      )})}
    </View>
    </View>



{/* You can use flatlist cause 
1. Just have to horizontal so no virtualisation errror
2. Data in array */}
    {/* Gallery container */}
      <View className=' mb-6 '>
          <Text className=' text-2xl mb-3  font-bold'>Gallery</Text>
    
    <FlatList 
    horizontal={true}
    data={property?.gallery||[]}
    // ListHeaderComponent={}
     showsHorizontalScrollIndicator={false}
    ListEmptyComponent={<Text>No Images Found</Text>}
    renderItem={({item}) => {
      return(
        <View className=" mx-2">
           <Image
            source={{uri: item?.image}}
            className=" w-48 h-48  rounded-2xl "
          />
        </View>
      )
    }}
    />
          
        </View>
    
    
      {/* Location container */}
      <View className=' mb-6 '>
        <Text className=' text-2xl mb-1  font-bold'>Location</Text>
        {/* address container */}
        <View className=" flex-row gap-2 items-center mb-2 ">
          <Image source={icons.location} className=" size-7" />
          <Text>{property?.geolocation}</Text>
        </View>
        {/* Map */}
        <Image source={images.map} resizeMode="contain" className="  h-52 w-full " />
      </View>



{/* Container for review, Here I'm breaking law of consitency cause in mb-4 looks greate
not in mb-6*/} 
<View className=" mb-4  ">
  <View className=" flex-row items-center mb-4  justify-between">
      <Text className=" font-rubik-bold  text-xl ">Reviews</Text>
          <Text className="  font-bold  text-primary-300">Select All</Text>
        </View>
      {
        property?.reviews?.review?   (<Reviews property={property} />): (<Text className=" text-xl font-bold mb-6">No Reviews Found</Text>)        

      }
       </View>
        
     
 
    
      {/* For price and Button */}
      <View className=" flex-row items-center justify-between  mb-6">
        {/* why have we put  Price text and number inside container ? Look in parent there is flex row then children will flex row but we don't want that 
        that's why we have wrapped inside view and view by default flex-col*/}
        <View>
          <Text className=" text-xl  font-semibold text-gray-500  ">Price</Text>
          <Text className=" text-2xl  font-bold  text-[#0061FF]  ">${property?.price}</Text>
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

export default Details

// Item & index : {"$collectionId": "67a861ae000497ceec29", "$createdAt": "2025-02-09T08:09:52.322+00:00", "$databaseId": "6798bb3a002bafd474de", "$id": "67a862d10008a998722e", "$permissions": [], "$updatedAt": "2025-02-09T08:37:48.458+00:00", "icon": "https://cloud.appwrite.io/v1/storage/buckets/67a8620f003312df50a0/files/67a8624d000c2e65af4c/view?project=6793d6a40001564b515f&mode=admin", "title": "Swimming Pool"} 0