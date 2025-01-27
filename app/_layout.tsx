import '../global.css';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Redirect } from 'expo-router';
// import  AuthProvider  from '~/context/auth-context';
import AuthProvider from '~/context/auth-context';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  // const {user , loggedIn} = useGlobalContext()
  // console.log(user ,loggedIn);

  // if (user !==null && loggedIn) {
  //   // it's a component so we have to put either inside jsx or
  //   // return it
  //  return <Redirect href={"/home"} />

  // }
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name='test' /> */}
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
