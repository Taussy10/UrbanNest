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
} from 'react-native';
import {useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/header';
import Search from '~/components/home/search';
import Featured from '~/components/home/featured';
import Recom from '~/components/home/recom';
import { getCurrentUser,getProperties,  getLatestProperties, Logout, config } from '~/appwrite/appwrite';
import { useContext } from 'react';
import { AuthContext } from '~/context/auth-context';
import { FeaturedCard, PropertyCard } from '~/components/home/cards';
import images from '~/constants/images';
import icons from '~/constants/icons';
import Filters from '~/components/home/filters';
import { Link, router, useLocalSearchParams, useRouter } from 'expo-router';
import { useAppwrite } from '~/appwrite/useAppwrite';
import { useState } from 'react';

const Home = () => {
  const router = useRouter()
  const params = useLocalSearchParams<{query?: string , filter?: string, }>()
  const [feauredData, setFeauredData] = useState([])

  useEffect(() => {
    const fetchLatestProperties = async() => {
      try {
       const result = await getLatestProperties()
        setFeauredData(result)
        console.log("FeaturedData" ,result);
        
      } catch (error) {
       console.log(error);
      }
       }
       fetchLatestProperties()

  }, [])
  

console.log( "prams" ,params);



  // const { data: latestProperties, loading: latestPropertiesLoading } =
  // useAppwrite({
  //    getLatestProperties,
  // });  

  // // properties is alias of data
  // const {data: properties,refetch,loading,} = useAppwrite({
  //   getProperties,
  //   params: {
  //     filter: params.filter!,
  //     query: params.query!,
  //     limit: 6,
  //   },
  //   skip: true,
  // });

  // useEffect(() => {
    
  //   refetch({
  //     filter: params.filter!,
  //     query: params.query!,
  //     limit: 6,
  //   })
  // }, [params.filter , params.query])
  


  const moveDetails = () => {
    router.push("/move")
  }
  return (
    <SafeAreaView className="flex-1 bg-white    p-4 ">



      <FlatList
        // number of times we want to render items
        data={[1, 2]}
        // data={[1]}
        contentContainerClassName="pb-32 "
        // columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => index.toString()}
        ListHeaderComponent={
          <View>
            <Header />
            <Search />
            {/* just for temporor */}
            <Button title='Move' onPress={() => router.push("/user")} />
          
       
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
        
              data={feauredData}
            //  keyExtractor={(index) => index.toString() }
              renderItem={() => <FeaturedCard data={feauredData} onPress={moveDetails} />}
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
        numColumns={2}
        // for giving gap between column
        columnWrapperClassName= 'gap-4 px-2'
        renderItem={({ item }) =>{
          return(
        <PropertyCard />
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
