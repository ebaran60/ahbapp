import { View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Searchbar.styles';

const Searchbar = ({placeholder,iconName}) => {
  return (
    <View style={styles.container} >
      <TextInput 
        style={styles.input}
        placeholder={placeholder}

      />
      <Icon name={iconName} size={35} color="gray" />
    </View>
  );
}

export default Searchbar;