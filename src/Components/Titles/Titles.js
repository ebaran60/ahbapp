import { View, Button } from 'react-native';
import React from 'react';

import styles from './Titles.styles';

const Titles = (props) => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} title={props.item.title} />
    </View>
  );
}

export default Titles;