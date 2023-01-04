import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

import styles from './EditApperance.styles';

import ProfileSetting from '../../../../Components/ProfileSetting';

import { appearanceSetting } from '../../../../mock';

const EditApperance = () => {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={appearanceSetting}
            renderItem={({item}) =>
            <ProfileSetting item={item} />
        }
        />
    </SafeAreaView>
  )
}

export default EditApperance