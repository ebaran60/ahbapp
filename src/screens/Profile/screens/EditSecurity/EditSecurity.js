import { FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './EditSecurity.styles';

import ProfileSetting from '../../../../Components/ProfileSetting';

import { securitySetting } from '../../../../mock';

const EditSecurity = () => {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={securitySetting}
            renderItem={({item}) =>
            <ProfileSetting item={item} />
        }
        />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EditSecurity