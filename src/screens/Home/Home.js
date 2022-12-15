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
      source: "../../assets/images/profile.png",
    },
    {
      id: 2,
      source: "../../assets/images/profile.png",
    },
    {
      id: 3,
      source: "../../assets/images/profile.png",
    },
  ]

  const renderEvents = ({Data}) => (
    <Events src={Data => Data.}/>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Header userName="isim" />
            <Search placeholder="Search" iconName="search" />
            <MainEvent />
            <Titles />
            
        </View>
        <FlatList data = {Data} renderItem={renderEvents} />
    </SafeAreaView>
    
  );
}

export default Home