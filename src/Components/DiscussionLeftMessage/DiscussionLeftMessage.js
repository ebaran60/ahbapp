import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './DiscussionLeftMessage.styles'

const DiscussionLeftMessage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/textImage1.png')} />
      <View style={styles.right_container}>
        <Text style={styles.message_text}>Hello friends! I'm sure it will be a great concert. We eagerly await...</Text>
        <View style={{alignItems:'flex-end', margin:4}}>
            <Text style={styles.time_text}>11:00am</Text>
        </View>
      </View>
    </View>
  )
}

export default DiscussionLeftMessage