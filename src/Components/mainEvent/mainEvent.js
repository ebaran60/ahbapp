import { Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './mainEvent.styles'

const mainEvent = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
          <Image style={styles.image} source={{uri:props.item.source}}/>
    </TouchableOpacity>
  )
}

export default mainEvent