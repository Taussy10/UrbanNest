import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useEffect ,useState , useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/header';
import Search from '~/components/home/search';
import { getCurrentUser,getProperties,  getLatestProperties, Logout, config } from '~/appwrite/appwrite';
import { AuthContext } from '~/context/auth-context';
import { FeaturedCard, PropertyCard } from '~/components/home/cards';
import Filters from '~/components/home/filters';
import { Link, router, useLocalSearchParams, useRouter } from 'expo-router';
import { useAppwrite } from '~/hooks/useAppwrite';
import NoResults from '~/components/home/no-results';
import icons from '~/constants/icons';

const Explore = () => {
  const router = useRouter()
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const [recommendProps, setRecommendProps] = useState([])

 
  console.log("params :",params);
  
  // For featured properites
  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

console.log("featured Props :",latestProperties);

const { data: properties, refetch, loading,} = useAppwrite({
  fn: getProperties,
  params: {
    filter: params.filter!,
    query: params.query!,
    limit: 6,
  },
  skip: true,
});

console.log("properties :" , properties?.length);


useEffect(() => {
  refetch({
    filter: params.filter!,
    query: params.query!,
    limit: 20,
  });
}, [params.filter, params.query]);

// pushing the rotuer sending param as id
const handleCardPress = (id: string) => router.push(`/properties/${id}`);


  return (
    <SafeAreaView className="flex-1 bg-white    p-4 ">



      <FlatList
        // number of times we want to render items
        // data={[]}
        data={properties}
        contentContainerClassName="pb-32 "
        // columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.$id}

        ListHeaderComponent={
          <View>
            {/* Navigation */}
            <Text className='   my-3 text-xl font-rubik-bold text-center w-full'>Search for Your Ideal Home</Text>
                        {/* <View className=' flex-row items-center justify-between'>
              <TouchableOpacity 
              onPress={() => router.back()}
              className="  size-7 rounded-full  bg-primary-200 p-2
               justify-center items-center
              ">
              <Image source={icons.backArrow} className=' size-7'/>
              </TouchableOpacity> 
              <Image source={icons.bell}
              className=' size-7'
              />
            </View>  */}
            <Search />
            <Filters />
            <Text className=' my-5 text-2xl text-black-300  font-bold text-center'> Found {properties?.length} {properties?.length > 1 ?(<Text>Properties</Text>): (<Text>Property</Text>) } </Text>
          </View>
        }

        ListEmptyComponent={
          loading ? (
            <ActivityIndicator  size={"large"} className=' text-primary-300  mt-5'  />
              ):(
      <NoResults />
          )
        }
        numColumns={2}
        // for giving gap between column
        columnWrapperClassName= 'gap-4 px-2'
        renderItem={({ item }) =>{
          return(
            <View>
              {/* that param handleCardPress id = item.id */}
              <PropertyCard onPress={() => handleCardPress(item.$id)} item={item} />
            </View>
           
          )
        } }
      />
    </SafeAreaView>
  );
};

export default Explore;

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
