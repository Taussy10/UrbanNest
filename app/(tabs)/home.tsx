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
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/header';
import Search from '~/components/home/search';
import Featured from '~/components/home/featured';
import Recom from '~/components/home/recom';
import { getCurrentUser, Logout } from '~/appwrite/appwrite';
import { useContext } from 'react';
import { AuthContext } from '~/context/auth-context';
import { FeaturedCard, PropertyCard } from '~/components/home/cards';
import images from '~/constants/images';
import icons from '~/constants/icons';
import Filters from '~/components/home/filters';
import { router, useRouter } from 'expo-router';
import { seed } from '~/lib/seed';
const Home = () => {
  const router = useRouter()

  const moveDetails = () => {
    router.push("/details")
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
            {/* <Button title='Move' onPress={() => seed()} /> */}

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
        
              data={[1, 2]}
            //  keyExtractor={(index) => index.toString() }
              renderItem={() => <FeaturedCard onPress={moveDetails} />}
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
        renderItem={({ item }) => <PropertyCard />}
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
