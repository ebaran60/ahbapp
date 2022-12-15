import { TouchableWithoutFeedback, Image, View, Text } from 'react-native'
import React from 'react'
import styles from './Event.styles';

const Events = ({props}) => {
  return (
    <TouchableWithoutFeedback>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:src.source}} />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default Events;