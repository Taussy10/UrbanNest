import {
  FlatList, Image, ScrollView, Text,TouchableOpacity,View,Dimensions,Platform,ImageBackground,} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "~/constants/icons";
import images from "~/constants/images";
import { useAppwrite } from "~/hooks/useAppwrite";
import { getPropertyDetails } from "~/appwrite/appwrite";
import Reviews from "~/components/details/Reviews";

const Details = () => {
  // const { id } = useLocalSearchParams<{ id?: string }>();

 
    const {id} = useLocalSearchParams<{id?: string}>()
  
    const { data: property } = useAppwrite({
      fn: getPropertyDetails,
      params: {
        id: id!,
      },
    });
  
    console.log("Property from ID :" ,property);
    
  
  
    // property?.facility.map((item:string, index:number) => {
    //   console.log("Item & index :",item , index) }
property?.facility.map((item, index)=> {
  console.log("Item & index :",item , index) 
})

  
  return (
   
     <SafeAreaView className=" flex-1 bg-white">
         <ScrollView>
    {/* mainGroup-1: HeaderGroup  */}
    <View
            className=' mb-6'
            >
            <ImageBackground
            source= {{uri: property?.image}} className=" h-[375px] w-full"
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
          <Text className=' font-semibold text-2xl '>{property?.name}</Text>
        </View>
    
        {/*star and apartment  */}
        <View className=" flex-row gap-2 mb-3 items-center">
          {/* container for bg color rounded */}
          <View
          className="  rounded-full  bg-primary-200 p-2 "
          >
          <Text className=" font-bold  text-[12px] text-[#0061FF]  ">{property?.type}</Text>
          </View>
    
    
          {/* for star and text */}
          <View className=" flex-row items-center  ">
            <Image source={icons.star} className="  size-5" />
            <Text> {property?.rating} ({property?.reviews?.length} reviews)</Text>
          </View>
    
        </View>
    
        {/* bed , bath 2000sqft container */}
        <View className=" flex-row items-center  gap-5">
    
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
    
          {/* Overview container: single  element  */}
        <View className=" mb-4">
          <Text className='text-2xl mb-1  font-bold'>Overview</Text>
          <Text className='  text-gray-500 text-[16px]'>
           {property?.description}
          </Text>
        </View>
    
      {/* for facilites container */}
      <View className=" mb-4  ">
        <Text className=' text-2xl mb-3  font-bold' >Facilities</Text>
    
    
    
 

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
        <View key={index} className="items-center mb-4 w-1/4   ">
          <View className="bg-primary-200 size-16 rounded-full p-4 mb-2">
            <Image
              source={{uri: item?.icon}}
              className="size-8 rounded-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-center   text-[13px]  font-bold">{item.title.slice(0,6)}...</Text>
        </View>
      )})}
    </View>
    </View>



{/* You can use flatlist cause 
1. Just have to horizontal so no virtualisation errror
2. Data in array */}
    {/* Gallery container */}
      <View className=' mb-4'>
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
      <View className=' mb-4'>
        <Text className=' text-2xl mb-1  font-bold'>Location</Text>
        {/* address container */}
        <View className=" flex-row gap-2 items-center mb-2 ">
          <Image source={icons.location} className=" size-7" />
          <Text>{property?.geolocation}</Text>
        </View>
    
        {/* Map */}
        <Image source={images.map} resizeMode="contain" className="  h-52 w-full " />
      </View>
    

      {/* for reviews */}
      <Reviews property={property} />
 
    
      {/* For price and Button */}
      <View className=" flex-row items-center justify-between ">
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