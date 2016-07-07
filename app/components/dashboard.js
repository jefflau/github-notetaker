import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'red'
  },
  repoButton: {
    backgroundColor: 'blue'
  },
  notesButton: {
    backgroundColor: 'green'
  }
});

export default class Main extends React.Component {
  _navigate(){
    this.props.navigator.push({
      name: 'Main', // Matches route.name
    })
  }
  goToProfile(){
    this.props.navigator.push({
      name: 'Profile',
      passProps: {
        userInfo: this.props.userInfo
      },
      title: 'Profile'
    })
  }
  goToRepo(){
    this.props.navigator.push({
      name: 'Repositories',
      passProps: {
        userInfo: this.props.userInfo
      },
      title: 'Repositories'
    })
  }
  goToNotes(){
    console.log('notes')
  }
  render(){
    console.log('something', this.props);
    let { avatar_url } = this.props.userInfo;
    return (
      <View style={styles.container}>
      <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
      <TouchableHighlight onPress={ this.goToProfile.bind(this) } underlayColor="#88D4F5" style={[styles.buttonContainer]}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ this.goToRepo.bind(this) } underlayColor="#88D4F5" style={[styles.buttonContainer, styles.repoButton]}>
        <Text style={styles.buttonText}>Go to Repos</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ this.goToNotes.bind(this) } underlayColor="#88D4F5" style={[styles.buttonContainer, styles.notesButton]}>
        <Text style={styles.buttonText}>Go to Notes</Text>
      </TouchableHighlight>
      </View>
    )
  }
}
