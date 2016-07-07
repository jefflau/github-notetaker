import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';


var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },
});

const Separator = () => (
  <View style={styles.separator}></View>
)

export default Separator;
