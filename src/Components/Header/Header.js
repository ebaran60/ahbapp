import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Image style={styles.image} source={require('../../assets/images/profile.png')} />
        
      </View>
      <View>
        <Text style={styles.merhaba}>Merhaba</Text>
        <Text style={styles.name}>isim</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.touchableview} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header