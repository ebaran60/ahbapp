import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './Message.styles'

const Message = ({ item }) => {
  return (
    <View style={item.isSelf?styles.selfContainer:styles.otherContainer}>
      <Image style={styles.image} source={{uri:item.userImage}} />
      <View style={item.isSelf?styles.selfMessageContainer:styles.otherMessageContainer}>
        <Text style={item.isSelf?styles.selfMessageText:styles.otherMessageText}>{item.message}</Text>
        <View style={{ alignItems: 'flex-end', margin: 4 }}>
          <Text style={styles.time_text}>{item.date}</Text>
        </View>
      </View>
    </View>
  )
}

export default Message