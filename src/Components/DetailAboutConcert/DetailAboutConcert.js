import { View, Text } from 'react-native'
import React from 'react'

import styles from './DetailAboutConcert.styles';


const DetailAboutConcert = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>About Concert</Text>
      <Text style={styles.comment_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum Read More...</Text>
    </View>
  )
}

export default DetailAboutConcert