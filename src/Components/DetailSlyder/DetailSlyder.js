import { FlatList, ImageBackground, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { width } from '../../config'

import styles from './DetailSlyder.styles'

const DetailSlyder = (props) => {

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

    <View>
      <FlatList
        onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={({ item, index }) =>
          <ImageBackground style={{ width: width, height: width * 0.9 * 0.8, flexDirection: 'column-reverse' }} resizeMode='cover' source={item.source}>
          </ImageBackground>
        }
      />
      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>
        {Data.map((item, index) =>
          <View key={index} style={{ width: 14, height: 14, borderRadius: 14 / 2, marginHorizontal: 2, backgroundColor: selectedSlider == index ? 'white' : 'gray' }} />
        )}
      </View>
    </View>
  )
}

export default DetailSlyder