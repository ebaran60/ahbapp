import { View, SafeAreaView, Text, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Data, Titless, Activity } from '../../mock';
import Proffer from '../../Components/Proffer';
import styles from './Home.styles';
import Header from '../../Components/Header';
import Search from '../../Components/Searchbar';
import MainEvent from '../../Components/mainEvent';
import Titles from '../../Components/Titles';
import Events from '../../Components/Events';
import NoResult from '../../Components/NoResult';
import { colors, width } from '../../config';

const Home = ({ navigation }) => {
  const [selectedSlider, setSelectedSlider] = useState(0);
  const [dataState, setDataState] = useState(Data);
  const [searchKeyword, setSearchKeyword] = useState("");
  const scrolling = (scrollLocation) => {
    if (scrollLocation == 0) {
      setSelectedSlider(0)
    }
    else {
      setSelectedSlider(Math.ceil(scrollLocation / width * 0.9))
    }
  }
  const aramaYap = (keyword) => {
    if (keyword.length > 0) {
      setDataState(Data.filter(item => item.id == keyword))
    }
    else {
      setDataState(Data)
    } 1
  }
  const handleProductSelect = (source) => {
    navigation.navigate('Detail', { source })
  };




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header userName="Alexandre S." />
        <Search value={searchKeyword} onChangeText={text => aramaYap(text)} />
        {dataState.length == 0
          ? 
          <NoResult />
          : <View>
            <FlatList
              onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={dataState}
              renderItem={({ item, index }) =>
                <MainEvent item={item} onSelect={() => handleProductSelect(item.source)} />
              } />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>
              {dataState.map((item, index) =>
                <View key={index} style={{ width: selectedSlider == index ? 29 : 14, height: 5, borderRadius: 8, marginHorizontal: 2, backgroundColor: selectedSlider == index ? colors.gray : '#D9D9D9' }} />
              )}
            </View>
            <Proffer title="Trending" />
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={Titless}
              renderItem={({ item }) =>
                <Titles title={item.title} />
              }
            />
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={Activity}
              renderItem={({ item }) =>
                <Events item={item} />
              } />
            <Proffer title="Nearby Your Location" />
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={Activity}
              renderItem={({ item }) =>
                <Events item={item} />
              } />
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home