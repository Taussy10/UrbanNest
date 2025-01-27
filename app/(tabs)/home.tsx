import { ScrollView, StyleSheet, Text, View, Button , StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/header';
import Search from '~/components/home/search';
import Featured from '~/components/home/featured';
import Recom from '~/components/home/recom';
import { getCurrentUser, Logout } from '~/appwrite/appwrite';
import { useContext } from 'react';
import { AuthContext } from '~/context/auth-context';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 p-4    bg-white ">
      <ScrollView 
      className='  pb-56 '
      showsVerticalScrollIndicator={false}
    
      >
        
        <Header />
        <Search />
        <Featured />
        <Recom />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

