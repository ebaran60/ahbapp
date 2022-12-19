import { View, FlatList, TouchableOpacity,Text } from 'react-native';
import React, { useState } from 'react';
import { height, width } from '../../config';

import styles from './Detail.styles';

import Header from '../../Components/Header';
import MainEvent from '../../Components/mainEvent';
import DetailButton from '../../Components/DetailButton';
import Proffer from '../../Components/Proffer';
import Detailprops from '../../Components/Detailprops';

const Detail = ({route}) => {
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
  ];
  return (
    <View>
      <Header userName="aaaaa"/>
      <FlatList
          onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item, index }) =>
            <MainEvent item={item} />
          } />
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>
            {Data.map((item, index) =>
            <View key={index} style={{ width: selectedSlider == index?16:8, height: 8, borderRadius: 8, marginHorizontal: 2, backgroundColor: selectedSlider == index ? 'red' : 'black' }} />
            )}
        </View>
        <DetailButton text1="Meeting" text2="3-8" />
        <Proffer title="Tarkan Concert" />
        <Detailprops />
        <Detailprops />
        <TouchableOpacity style={{backgroundColor:'#1F1F1F', borderRadius:50,margin:10,padding:5,alignItems:'center'}}>
          <Text style={{color: '#FFFFFF',fontWeight:'bold'}}>View Discussions</Text>
        </TouchableOpacity>
        <Header userName="bbbbb"/>
    </View>
  );
};

export default Detail;