import { View, Text,TextInput } from 'react-native'
import React from 'react'

import styles from './EditProfile.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>EditProfile</Text>
        <TextInput style={styles.input} />
      </View>
    </SafeAreaView>
  )
}

export default EditProfile