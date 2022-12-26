import { View, Text, SafeAreaView,ScrollView,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'

import styles from './Bookmarkcomp.styles'

import { Bookmarks } from '../../mock'

const Bookmarkcomp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.date}>21 December 2022</Text>
      <ScrollView >
        <FlatList 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Bookmarks}
          renderItem={({item}) => 
            <View style={styles.flatlistContainer}>
                <View style={styles.leftContainer} >
                    <Image style={styles.eventImage} source={{uri : item.eventImage}} />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.participant}>aaaaa</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Event Page</Text>
                        <Image style={{width:4.5,height:9}} source={require('../../assets/images/rightdirection.png')} />
                    </TouchableOpacity>
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

export default Bookmarkcomp