import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './EditHelp.styles'

const EditHelp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.line} />
        <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('helpFAQ')}>
            <Text style={styles.text}>FAQ</Text>
        </TouchableOpacity >
        <View style={styles.line} />
        <TouchableOpacity style={styles.touchableContainer}>
            <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.touchableContainer}>
            <Text style={styles.text}>Terms & Conditions</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.touchableContainer}>
            <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.touchableContainer}>
            <Text style={styles.text}>About Us</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EditHelp