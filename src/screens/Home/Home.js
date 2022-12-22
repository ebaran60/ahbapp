import { View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Proffer from '../../Components/Proffer';
import styles from './Home.styles';
import Header from '../../Components/Header';
import Search from '../../Components/Searchbar';
import MainEvent from '../../Components/mainEvent';
import Titles from '../../Components/Titles';
import Events from '../../Components/Events';
import { colors, width } from '../../config';

const Home = ({navigation}) => {
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
      source: require("../../assets/images/Tarkan.png"),
    },
    {
      id: 2,
      source: require("../../assets/images/Tarkan.png"),
    },
    {
      id: 3,
      source: require("../../assets/images/Tarkan.png"),
    },
  ];
  const Activity = [
    {
      id: 1,
      participant:"1",
      title:"Cinema",
      source: require("../../assets/images/cinema.png"),
      date:"12 October 15:45",
      location:"E.Ü. Konak AKM Yunus E...",
    },
    {
      id: 2,
      title:"Camping",
      source: require("../../assets/images/Camping.png"),
      date:"12 October 15:45",
      location:"E.Ü. Konak AKM Yunus E...",
    },
    {
      id: 3,
      title:"Football",
      source: require("../../assets/images/Football.png"),
      date:"12 October 15:45",
      location:"E.Ü. Konak AKM Yunus E...",
    },
  ];
  const Titless = [
    {
      id:1,
      title:"Music",
    },
    {
      id:2,
      title:"Dance"
    },
    {
      id: 3,
      title:"Football"
    },
    {
      id:4,
      title:"Cinema"
    },
    {
      id:5,
      title:"Camping"
    },
    {
      id:6,
      title:"Dating"
    },
  ]
  const handleProductSelect = (source) => {
    navigation.navigate('Detail', {source})
 };
  



  return (
    <SafeAreaView style={styles.container} >
      <ScrollView>
        <Header userName="isim" />
        <Search placeholder="Search" iconName="search" />
        <FlatList
          onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item, index }) =>
            <MainEvent item={item} onSelect={() => handleProductSelect(item.source)} />
          } />
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>
          {Data.map((item, index) =>
            <View key={index} style={{ width: selectedSlider == index?29:14, height: 5, borderRadius: 8, marginHorizontal: 2, backgroundColor: selectedSlider == index ? colors.gray : '#D9D9D9' }} />
          )}
        </View>
        <Proffer title="Trending"/>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Titless}
          renderItem={({item}) =>
            <Titles title={item.title} />
        }
        />
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Activity}
          renderItem={({item}) =>
            <Events item={item} />
          } />
        <Proffer title="Nearby Your Location"/>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Activity}
          renderItem={({item}) =>
            <Events item={item} />
          } />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home