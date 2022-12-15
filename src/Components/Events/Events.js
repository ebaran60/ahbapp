import {  Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Event.styles';
const Events = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text>ASD</Text>
        <Image source={props.item.source} />
    </TouchableOpacity>
  )
}

export default Events;