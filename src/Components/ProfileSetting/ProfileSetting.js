import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './ProfileSetting.styles';

const ProfileSetting = ({item}) => {
  return (
    <View style={styles.container} >
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity style={styles.touchableContainer}>
            <View style={styles.dot} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </View>
  )
}

export default ProfileSetting