import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './NoResult.styles'

const NoResult = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/images/noResult.png')}/>
        <Text style={styles.text}>No Result!</Text>
    </View>
  )
}

export default NoResult