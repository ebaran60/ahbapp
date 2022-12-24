import { View, Text, Image, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Notificationscomp.styles';

import { Notifications } from '../../mock';

const Notificationscomp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.date}>21 December 2022</Text>
      <ScrollView >
        <FlatList 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Notifications}
          renderItem={({item}) => 
          <View style={styles.flatlistContainer} >
            <View style={styles.leftContainer}>
              <Image style={styles.image} source={{uri : item.userImage}} />
              <View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
            </View>
            <View>
              <View style={{height:2, backgroundColor:'#D9D9D9',width:300}} />
            </View>
          </View>
          }
          />
      </ScrollView>
      <TouchableOpacity style={styles.touchableContainer}>
        <Text style={styles.seemoreText}>See More</Text>
        <Image style={styles.directionImage} source={require('../../assets/images/downdirection.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Notificationscomp