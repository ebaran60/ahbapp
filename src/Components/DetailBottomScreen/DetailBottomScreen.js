import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './DetailBottomScreen.styles';

const DetailBottomScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.left_container}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../../assets/images/Share.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../../assets/images/Favorite.png')} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.right_container}>
            <Text style={styles.text}>Request</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DetailBottomScreen