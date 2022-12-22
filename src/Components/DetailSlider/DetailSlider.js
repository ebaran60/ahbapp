import { FlatList,Text, ImageBackground, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { width } from '../../config'
import { Data } from '../../mock'
import styles from './DetailSlider.styles'

const DetailSlider = (props) => {
  const [selectedSlider, setSelectedSlider] = useState(0);
  const scrolling = (scrollLocation) => {
    if (scrollLocation == 0) {
      setSelectedSlider(0)
    }
    else {
      setSelectedSlider(Math.ceil(scrollLocation / width * 0.9))
    }
  }


  return (

    <View>
      <FlatList
        onScroll={event => scrolling(event.nativeEvent.contentOffset.x)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={({ item, index }) =>
          <ImageBackground style={{ width: width, height: width * 0.9 * 0.8, flexDirection: 'column-reverse' }} resizeMode='cover' source={{ uri: item.source }}>
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

export default DetailSlider