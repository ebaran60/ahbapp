import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
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
  return (
    <ImageBackground style={{ width: width , height: width * 0.9 * 0.8, flexDirection: 'column-reverse' }} resizeMode='cover' source={props.item.source}>
      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>
          {props.data.map((item, index) =>
          <View key={index} style={{ width: selectedSlider == index?16:8, height: 8, borderRadius: 8, marginHorizontal: 2, backgroundColor: selectedSlider == index ? 'red' : 'black' }} />
           )}
      </View>
    </ImageBackground>
  )
}

export default DetailSlyder