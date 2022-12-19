import { View, TextInput,Image } from 'react-native'
import React from 'react'

import styles from './Searchbar.styles';

const Searchbar = ({placeholder,iconName}) => {
  return (
    <View style={styles.container} >
      <TextInput 
        style={styles.input}
        placeholder={placeholder}

      />
      <Image style={{width:30,height:30,resizeMode:'contain'}} source={require('../../assets/images/search-icon.png')} />
    </View>
  );
}

export default Searchbar;