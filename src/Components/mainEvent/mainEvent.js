import { Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './mainEvent.styles'

const mainEvent = (props) => {
  const Data = [
    {
      id: 1,
      source: require("../../assets/images/profile.png"),
    },
    {
      id: 2,
      source: require("../../assets/images/profile.png"),
    },
    {
      id: 3,
      source: require("../../assets/images/profile.png"),
    },
  ]
  return (
    <TouchableOpacity style={styles.container}>
          <Image style={styles.image} source={props.item.source}/>
    </TouchableOpacity>
  )
}

export default mainEvent