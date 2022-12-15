import { View, Button } from 'react-native';
import React from 'react';

import styles from './Titles.styles';

const Titles = () => {
  return (
    <View style={styles.container}>
      <Button title='aaa' />
      <Button title='aaa' />
    </View>
  );
}

export default Titles;