import { View, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'

import styles from './Home.styles';
import Header from '../../Components/Header';
import Search from '../../Components/Searchbar';
import MainEvent from '../../Components/mainEvent';
import Titles from '../../Components/Titles';
import Events from '../../Components/Events';
import { width } from '../../config';
const Home = () => {
  const [selectedSlider, setSelectedSlider] = useState(0);
  const scrolling = (scrollLocation) => {
    if (scrollLocation == 0) {
      setSelectedSlider(0)
    }
    else {
      setSelectedSlider(Math.ceil(scrollLocation / width * 0.9))
    }
  }
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
          onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item, index }) =>
            <Events item={item} />
          } />
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>
          {Data.map((item, index) =>
            <View key={index} style={{ width: selectedSlider == index?16:8, height: 8, borderRadius: 8, marginHorizontal: 2, backgroundColor: selectedSlider == index ? 'red' : 'black' }} />
          )}
        </View>
      </View>

    </SafeAreaView>

  );
}

export default Home