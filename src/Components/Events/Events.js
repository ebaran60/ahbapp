import {  Image, ImageBackground, TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import styles from './Event.styles';
import { Fonts } from '../../config';
const Events = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
        <ImageBackground style={styles.image} source={props.item.source} borderRadius={10} resizeMode={'cover'}>
          <View style={styles.textContainer}>

            <Text style={{color:'white', fontFamily:Fonts.Bold,fontSize:20}}>Cinema</Text>
            <Text style={{color:'white',fontFamily:Fonts.Medium}}>aaaaa</Text>
            <Text style={{color:'white',fontFamily:Fonts.Regular}}>aaaaa</Text>
          </View>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default Events;