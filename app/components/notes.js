import React from 'react';
import firebase from 'firebase';
import {
  ListView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';


import Dimensions from 'Dimensions';
import api from '../utils/api';

var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    backgroundColor: 'white'
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#ccc',
    left: 0,
    bottom: 0,
    width,
    height: 40
  }
})

//github-notetaker-571fe.firebaseio.com

const Footer = () => (
  <View style={styles.footer}>
    <TextInput />
    <TouchableHighlight><Text>Add Note</Text></TouchableHighlight>
  </View>
)

class Notes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView />
        <Footer />
      </View>
    )
  }
}

export default Notes;
