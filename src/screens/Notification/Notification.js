import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Notification.styles';

import NoResult from '../../Components/NoResult';
import Notificationscomp from '../../Components/Notificationscomp';

import { Notifications } from '../../mock';

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
        {Notifications.length == 0 
        ?
          <View style={styles.noresultView}>
            <NoResult />
          </View>
        :
            <Notificationscomp />
        }
    </SafeAreaView>
  )
}

export default Notification