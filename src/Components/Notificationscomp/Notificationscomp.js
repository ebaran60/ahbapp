import { View, Text, Image, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from './Notificationscomp.styles';

import { Notifications } from '../../mock';

const Notificationscomp = () => {

  const [array,setArray] = useState(Notifications);
  const [more,setMore] = useState(false);
  const [counter,setCounter] = useState(2);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.date}>21 December 2022</Text>
      <ScrollView >
        <FlatList 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={array.filter((item , index) => index < counter)}
          renderItem={({item}) => 
          <View style={styles.flatlistContainer} >
            <View style={styles.leftContainer}>
              <Image style={styles.image} source={{uri : item.userImage}} />
              <View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.titleText}>{item.notification}</Text>
              </View>
            </View>
            <View>
              <View style={{height:2, backgroundColor:'#D9D9D9',width:300}} />
            </View>
          </View>
          }
          />
      </ScrollView>
      {counter < array.length?
          <TouchableOpacity style={styles.touchableContainer} onPress={() => setCounter(counter+2)}>
            <Text style={styles.seemoreText}>See More</Text>
            <Image style={styles.directionImage} source={require('../../assets/images/downdirection.png')} />
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.touchableContainer} onPress={() => setCounter(2)}>
            <Text style={styles.seemoreText}>daha azgör</Text>
            <Image style={styles.directionImage} source={require('../../assets/images/downdirection.png')} />
          </TouchableOpacity>
      }
    </SafeAreaView>
  )
}

export default Notificationscomp