import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles';

const Header = ({userName}) => {
  return (
    <SafeAreaView style={styles.container} >
      <Image style={styles.image} source={require('../../assets/images/profile.png')} />
      <View style={styles.body_container}>
        <Text style={styles.merhaba}>Merhaba</Text>
        <Text style={styles.name}>{userName}</Text>
      </View>
      <TouchableOpacity style={styles.touchable_container}>
        <View style={{height:4, width:20,backgroundColor:'black',borderRadius:5,}}/>
        <View style={{height:4, width:15,backgroundColor:'black',marginTop:2,marginBottom:2,borderRadius:5}}/>
        <View style={{height:4, width:10,backgroundColor:'black',borderRadius:5,}}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header