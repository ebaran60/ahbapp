import { View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import styles from './Home.styles';
import Header from '../../Components/Header';
import Search from '../../Components/Searchbar';
import MainEvent from '../../Components/mainEvent';
import Titles from '../../Components/Titles';
import Events from '../../Components/Events';

const Home = () => {

  const Data = [
    {
      id: 1,
      source: require("../../assets/images/profile.png"),
    },
    {
      id: 2,
      source: require("../../assets/images/profile.png"),
    },
    {
      id: 3,
      source: require("../../assets/images/profile.png"),
    },
  ]



  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header userName="isim" />
        <Search placeholder="Search" iconName="search" />
        <MainEvent />
        <Titles />
        <FlatList 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={Data} 
        renderItem={({ item }) =>
          <Events item={item} />
        } />
      </View>

    </SafeAreaView>

  );
}

export default Home