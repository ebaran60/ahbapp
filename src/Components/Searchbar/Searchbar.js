import { View, TextInput, Image } from 'react-native'
import React from 'react'

import styles from './Searchbar.styles';

const Searchbar = (props) => {
  return (
    <View style={styles.container} >
      <TextInput
        onChangeText={text => props.onChangeText(text)}
        style={styles.input}
        value={props.searchKeyword}
        placeholder={"Arama"}
        autoCapitalize='none'
      />
      <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/search-icon.png')} />
    </View>
  );
}

export default Searchbar;