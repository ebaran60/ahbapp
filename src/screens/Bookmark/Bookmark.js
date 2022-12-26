import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Notifications } from '../../mock';

import styles from './Bookmark.styles';

import NoResult from '../../Components/NoResult';
import Bookmarkcomp from '../../Components/Bookmarkcomp';

const Bookmark = () => {
  return (
    <SafeAreaView style={styles.container}>
        {Notifications.length == 0 
        ?
          <View style={styles.noresultView}>
            <NoResult />
          </View>
        :
            <Bookmarkcomp />
        }
    </SafeAreaView>
  )
}

export default Bookmark