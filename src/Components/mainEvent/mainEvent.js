import { View, Image, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './mainEvent.styles'

const mainEvent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
          <Image style={styles.image} source={require('../../assets/images/profile.png')}/>
      </View>
      <View style={styles.views}>
        <View style={{height:5, width:14,backgroundColor:'black',borderRadius:50, margin:5}}/>
        <View style={{height:5, width:29,backgroundColor:'black',borderRadius:50, margin:5}}/>
        <View style={{height:5, width:14,backgroundColor:'black',borderRadius:50, margin:5}}/>
      </View>
    </SafeAreaView>
  )
}

export default mainEvent