import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Detailprops.styles';

const Detailprops = () => {
  return (
    <View style={styles.contrainer}>
      <View style={styles.date_container}>
        <Image style={styles.image} source={require("../../assets/images/Date.png")} />
        <View>
          <Text style={styles.header_text}>October 30, 2022</Text>
          <Text style={styles.porps_text}>Sunday 9:00 - 11:00 PM</Text>
          <TouchableOpacity style={styles.touchable_container}>
            <Text>Add to my calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.location_container}>
        <Image style={styles.image} source={require("../../assets/images/Location.png")} />
        <View>
          <Text style={styles.header_text}>Vadistanbul Concert Center </Text>
          <Text style={styles.porps_text}>Ayazağa, Azerbaycan Cd. No:3/C, 34396</Text>
          <Text style={styles.porps_text}>Sarıyer/İstanbul</Text>
          <TouchableOpacity style={styles.touchable_container}>
            <Text>See on maps</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Detailprops