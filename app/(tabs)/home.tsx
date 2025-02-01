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

const Home = () => {
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

useEffect(() => {
  refetch({
    filter: params.filter!,
    query: params.query!,
    limit: 6,
  });
}, [params.filter, params.query]);

const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  const moveDetails = () => {
    router.push("/details")
  }
  return (
    <SafeAreaView className="flex-1 bg-white    p-4 ">



      <FlatList
        // number of times we want to render items
        // data={recommendProps}
        data={latestProperties}
        contentContainerClassName="pb-32 "
        // columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        // keyExtractor={(index) => index.toString()}
        ListHeaderComponent={
          <View>
            <Header />
            <Search />
            {/* just for temporor */}
            <Button title='Move' onPress={() => router.push("/details")} />
          
       
            {/* <Link href="/test?id=123&name=John">Go to Profile</Link> */}


            {/* Featured Header */}
            <View className=" mb-3 flex-row items-center  justify-between">
              <Text className=" text-2xl  font-semibold">Featured</Text>
              <Text className="text-xl font-bold text-blue-500">See All</Text>
            </View>

{/* Featured Cards */}
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              
              // add gap between elements
              contentContainerClassName="flex gap-5  "
        
              data={[1,2]}
             keyExtractor={(index) => index.toString() }
              renderItem={() =>
                //  <FeaturedCard  onPress={moveDetails} />
                 null
                }
            />

{/* Recommendation Header */}
            <View className=" mb-3 flex-row items-center  justify-between">
              <Text className=" text-2xl  font-semibold">Recommendation</Text>
              <Text className="text-xl font-bold text-blue-500">See All</Text>
            </View>

            <Filters />
            {/* Ok , I don't have problem with header */}
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
              <PropertyCard onPress={() => handleCardPress(item.$id)} item={item} />
            </View>
           
          )
        } }
      />
    </SafeAreaView>
  );
};

export default Home;

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
