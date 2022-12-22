import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import DiscussionLeftMessage from '../../Components/DiscussionLeftMessage';

import styles from './Discussion.styles';

const Discussion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor:'#E5E5E5'}}>
        <DiscussionLeftMessage />
      </ScrollView>
      <View style={styles.bottom_container}>
        <View style={styles.left_container} >
          <Image source={require('../../assets/images/Smile.png')} style={{width:28,height:28,margin:10}} />
          <TextInput 
          style={styles.input}
          placeholder="Type Message"
          />
        </View>
        <TouchableOpacity style={styles.right_container}>
          <Image style={styles.image} source={require('../../assets/images/Send.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Discussion