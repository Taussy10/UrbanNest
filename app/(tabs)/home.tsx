import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '~/components/home/header'
import Search from '~/components/home/search'

const Home = () => {
  return (
    <SafeAreaView
    className={styles.screen}>
      {/* <Text>Home</Text> */}
      <Header />
      <Search />
    </SafeAreaView>
  )
}

export default Home

const styles = {
  screen: 'flex-1 pl-4 pr-4 p-4  bg-slate-300 ',

};
