import { View, FlatList, TouchableOpacity,Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { height, width } from '../../config';

import styles from './Detail.styles';

import Header from '../../Components/Header';
import DetailSlyder from '../../Components/DetailSlyder'
import DetailButton from '../../Components/DetailButton';
import Proffer from '../../Components/Proffer';
import Detailprops from '../../Components/Detailprops';
import DetailHeader from '../../Components/DetailHeader';
import DetailAboutConcert from '../../Components/DetailAboutConcert';
import DetailLocation from '../../Components/DetailLocation';
import DetailBottomScreen from '../../Components/DetailBottomScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Detail = ({route , navigation}) => {

  const handleProductSelect = () => {
    navigation.navigate('Discussion')
  };

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
      source: require("../../assets/images/Tarkan2.png"),
    },
    {
      id: 2,
      source: require("../../assets/images/Tarkan2.png"),
    },
    {
      id: 3,
      source: require("../../assets/images/Tarkan2.png"),
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor:'white' , flex:1}}>
      <ScrollView >
          <Header userName="aaaaa"/>
          <FlatList
            onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={({ item, index }) =>
            <DetailSlyder item={item} data={Data} index={index} />
          } 
          />
          <DetailButton text1="Meeting" text2="3-8" />
          <Proffer title="Tarkan Concert" />
          <Detailprops />
          <TouchableOpacity  style={{backgroundColor:'#1F1F1F', borderRadius:50,margin:10,padding:5,alignItems:'center'}} onPress={() => handleProductSelect()} >
            <Text style={{color: '#FFFFFF',fontWeight:'bold'}}>View Discussions</Text>
          </TouchableOpacity>
          <DetailHeader userName="Cristy C." title="Organiser"/>
            <DetailAboutConcert />
          <DetailLocation />
      </ScrollView>
      <View style={{backgroundColor:'black', height:55, width:width,backgroundColor:'#303030'}}>
        <DetailBottomScreen />
      </View>
    </SafeAreaView>
  );
};

export default Detail;