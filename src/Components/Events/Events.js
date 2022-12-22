import {  Image, ImageBackground, TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import styles from './Event.styles';
import { Fonts } from '../../config';
const Events = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
        <ImageBackground style={styles.image} source={props.item.source} borderRadius={10} resizeMode={'cover'}>
          <View style={styles.textContainer}>
            <Text style={{color:'white', fontFamily:Fonts.Bold,fontSize:20}}>{props.item.title}</Text>
            <View style={{flexDirection:'row'}}>
              <Image style={styles.text_image} source={require('../../assets/images/HomeTime.png')} />
              <Text style={{color:'white',fontFamily:Fonts.Medium}}>{props.item.date}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Image style={styles.text_image}  source={require('../../assets/images/HomeLocation.png')} />
              <Text style={{color:'white',fontFamily:Fonts.Regular}}>{props.item.location}</Text>
            </View>
          </View>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default Events;