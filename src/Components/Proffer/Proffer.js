import { View, Text } from 'react-native';
import React from 'react';

import styles from './Proffer.styles';

const Proffer = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.seeall}>See All</Text>
    </View>
  );
};

export default Proffer;