import React from 'react';
import * as firebase from 'firebase';
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

var config = {
  apiKey: "AIzaSyDuuVVDcmRAkKr11CKm_EuJf8cweTEUvI8",
  authDomain: "github-notetaker-571fe.firebaseapp.com",
  databaseURL: "https://github-notetaker-571fe.firebaseio.com",
  storageBucket: "github-notetaker-571fe.appspot.com",
};

const Footer = () => (
  <View style={styles.footer}>
    <TextInput />
    <TouchableHighlight><Text>Add Note</Text></TouchableHighlight>
  </View>
)

class Notes extends React.Component {
  constructor(props){
    super(props);

    firebase.initializeApp(config);

    // var database = firebase.database();

    console.log('firebase', firebase)
    let db = firebase.database();

    db.ref('config').set({
      key: 'something data'
    }).catch((err)=> console.log(err))

    let notesRef = db.ref('usernames');

    notesRef.push({
      title: 'something'
    });
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{note: 'blah'}, {note: 'blah blah'}])
    }
  }

  componentDidMount() {
    this.listenForNotes();
  }

  listenForNotes() {

    notesRef.on('value', function(snapshot) {
      snapshot.forEach(child => {
        items.push({
          note: child.val().note,
          _key: child.key()
        })
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });

  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.note}</Text>}

        />
        <Footer />
      </View>
    )
  }
}

export default Notes;
