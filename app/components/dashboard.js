import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import API from '../utils/api';

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 22,
    color: '#333',
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  repoButton: {
  },
  notesButton: {
  }
});

export default class Main extends React.Component {
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
    API.getRepos(this.props.userInfo.login).then((repos)=>{
      this.props.navigator.push({
        name: 'Repositories',
        passProps: {
          userInfo: this.props.userInfo,
          repos
        },
        title: 'Repositories'
      })
    }).catch(err => console.log(err));
  }
  goToNotes(){
    this.props.navigator.push({
      name: 'Notes',
      title: 'Notes'
    })
  }
  render(){
    let { avatar_url } = this.props.userInfo;
    return (
      <View style={styles.container}>
      <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
      <TouchableHighlight onPress={ this.goToProfile.bind(this) } underlayColor="#88D4F5" style={[styles.buttonContainer]}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ this.goToRepo.bind(this) } underlayColor="#88D4F5" style={[styles.buttonContainer, styles.repoButton]}>
        <Text style={styles.buttonText}>Repos</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ this.goToNotes.bind(this) } underlayColor="#88D4F5" style={[styles.buttonContainer, styles.notesButton]}>
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableHighlight>
      </View>
    )
  }
}
