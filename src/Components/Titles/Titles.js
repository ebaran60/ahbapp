import {TouchableOpacity, Text } from 'react-native';
import React from 'react';

import styles from './Titles.styles';

const Titles = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Titles;