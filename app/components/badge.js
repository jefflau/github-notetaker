import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

function Badge({ userInfo}) {
  let { avatar_url, name, login } = userInfo;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: avatar_url}} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.handle}>{login}</Text>
    </View>
  )
}

export default Badge;
