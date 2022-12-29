import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { Bookmarks } from '../../mock';

import styles from './Bookmark.styles';

import NoResult from '../../Components/NoResult';
import Bookmarkcomp from '../../Components/Bookmarkcomp';

const Bookmark = () => {
  if(Bookmarks.length == 0) {
    return (
      <View style={styles.noResult}>
       <NoResult />
      </View>
    )
  }
  else{
    return (
      <SafeAreaView style={styles.container}>
        <Bookmarkcomp />
      </SafeAreaView>
    )
  }
}

export default Bookmark