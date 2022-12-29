import { View, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Notification.styles';

import NoResult from '../../Components/NoResult';
import Notificationscomp from '../../Components/Notificationscomp';

import { Notifications } from '../../mock';

const Notification = () => {
  if(Notifications.length == 0) {
    return (
      <View style={styles.noResult}>
       <NoResult />
      </View>
    )
  }
  else{
    return (
      <SafeAreaView style={styles.container}>
        <Notificationscomp />
      </SafeAreaView>
    )
  }
}

export default Notification