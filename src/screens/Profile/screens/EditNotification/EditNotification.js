import { SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import styles from './EditNotification.styles';

import ProfileSetting from '../../../../Components/ProfileSetting';

import { notificationSetting } from '../../../../mock';

const EditNotification = () => {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={notificationSetting}
            renderItem={({item}) =>
            <ProfileSetting item={item} />
        }
        />
    </SafeAreaView>
  )
}

export default EditNotification