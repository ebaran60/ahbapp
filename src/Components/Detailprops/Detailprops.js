import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Detailprops.styles';

const Detailprops = () => {
  return (
    <View style={styles.contrainer}>
      <Image style={styles.image} source={require("../../assets/images/profile.png")} />
      <View>
        <Text style={{fontWeight:'600', }}>aaaa</Text>
        <Text>aaaa</Text>
        <TouchableOpacity style={styles.touchable_container}>
          <Text>aaaaaaaaaaaaaaaaaaaa</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Detailprops