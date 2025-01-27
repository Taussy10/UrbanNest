import { ScrollView, StyleSheet, Text, View, Button , StatusBar, Image,ImageBackground,
   FlatList , TouchableOpacity } from 'react-native';
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
const Home = () => {
  return (
    <SafeAreaView className="flex-1 p-4    bg-white ">
      <ScrollView 
      className='  pb-56 '
      showsVerticalScrollIndicator={false}
    
      >
        <FlatList 
        // number of times we want to render items
        data={[1 , 2]}
        contentContainerClassName="pb-32 "
        // columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.toString()}
      //  horizontal
        renderItem={({item}) => <PropertyCard />}
         
        ListHeaderComponent={ 
        <View>
   <Header />
   <Search />
   <View className=" flex-row justify-between items-center  mb-3">
           <Text className=' text-2xl  font-semibold'>Featured</Text>
         <Text className="text-blue-500 text-xl font-bold">See All</Text>
                    </View>

            <FlatList 
            horizontal
              showsHorizontalScrollIndicator={false}
              // add gap between elements
              contentContainerClassName="flex gap-5  "
            data={[1,2]}
            renderItem={()=> <FeaturedCard />}
            />



    <View className=" flex-row justify-between items-center  mb-3">
           <Text className=' text-2xl  font-semibold'>Recommendation</Text>
         <Text className="text-blue-500 text-xl font-bold">See All</Text>
                    </View>

        <Filters />

        </View>
        }
        />
        
       
       
       
    
      </ScrollView>
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
