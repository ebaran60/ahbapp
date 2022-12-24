import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles';

const Header = ({ userName , onPress }) => {
  return (
    <View style={styles.container} >
      <View style={styles.leftContainer}>
        <Image style={styles.profileImage} source={require('../../assets/images/Header.png')} />
        <View style={styles.body_container}>
          <Text style={styles.merhaba}>Merhaba</Text>
          <Text style={styles.name}>{userName}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.touchable_container} onPress={onPress}>
        <Image style={styles.notificationImage} source={require('../../assets/images/Notification.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Header