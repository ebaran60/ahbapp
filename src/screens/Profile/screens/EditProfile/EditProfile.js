import { View, Text,TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './EditProfile.styles';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../../../../assets/images/Header.png')}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Fullname</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Gender</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Date of birth</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.buttonContainer} >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EditProfile