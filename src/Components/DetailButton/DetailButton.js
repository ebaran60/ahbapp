import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './DetailButton.styles';

const DetailButton = ({text1,text2}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable_container}>
            <Text>{text1}</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.touchable_container}>
            <Text>{text2}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DetailButton