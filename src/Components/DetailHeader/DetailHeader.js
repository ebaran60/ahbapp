import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './DetailHeader.styles';

const Header = ({ userName,title }) => {
  return (
    <View style={styles.container} >
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={require('../../assets/images/detailHeader.png')} />
        <View>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.touchable_container}>
        <Text style={{color:'white',fontWeight:'600', fontSize:14, lineHeight:21}}>Follow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header