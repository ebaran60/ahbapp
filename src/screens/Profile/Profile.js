import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './Profile.styles';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line} />
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Editprofile')}>
        <Image style={styles.image} source={require('../../assets/images/editprofile.png')} />
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Editnotification')}>
        <Image style={styles.image} source={require('../../assets/images/settingnotification.png')}/>
        <Text style={styles.text}>Notification</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Editsecurity')}>
        <Image style={styles.image} source={require('../../assets/images/security.png')}/>
        <Text style={styles.text}>Security</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Editapperance')}>
        <Image style={styles.image} source={require('../../assets/images/apperance.png')}/>
        <Text style={styles.text}>Apperance</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Edithelp')}>
        <Image style={styles.image} source={require('../../assets/images/help.png')}/>
        <Text style={styles.text}>Help</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.touchableContainer}>
        <Image style={styles.image} source={require('../../assets/images/settingshare.png')}/>
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <View style={styles.logoutContainer}>
        <TouchableOpacity >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile;