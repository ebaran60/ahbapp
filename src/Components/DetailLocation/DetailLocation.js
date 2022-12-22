import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './DetailLocation.styles';

const DetailLocation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text} >Location</Text>
      <Image style={styles.image} source={require('../../assets/images/detailLocation.png')}/>
    </View>
  )
}

export default DetailLocation