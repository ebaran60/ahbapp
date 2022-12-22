import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { message } from '../../mock';
import Message from '../../Components/Message';
import styles from './Discussion.styles';

const Discussion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      style={{backgroundColor:'#E5E5E5'}}
      data={message}
      renderItem={({item})=>
      <Message  item={item} />
      } />
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