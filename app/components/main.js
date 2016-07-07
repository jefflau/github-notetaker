import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ActivityIndicator
} from 'react-native';

import api from '../utils/api';

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  _navigate(){
    this.props.navigator.push({
      name: 'Home', // Matches route.name
    })
  }

  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit(event){
    this.setState({
      isLoading: true
    });

    api.getBio(this.state.username).then((res)=>{
      console.log('here', res)
      if(res.message === 'Not Found') {
        this.setState({
          error: 'User not found',
          isLoading: false
        })
      } else {
        this.setState({
          isLoading: false,
          username: ''
        })
        this.props.navigator.push({
          name: 'Dashboard',
          title: res.name,
          passProps: {
            userInfo: res
          }
        })
      }
    })

    console.log('submit', this.state.username);
  }

  render(){
    var showError = (
      this.state.error ? <Text>{this.state.error}</Text>: null
    );

    var showLoading = (
      this.state.isLoading ? <ActivityIndicator color="#111" size="large"></ActivityIndicator> : null
    )

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.instructions}>
          Search for a Github User
        </Text>
        <TextInput value={this.state.username} onChange={this.handleChange.bind(this)} style={styles.searchInput} />
        <TouchableHighlight style={styles.buton} onPress={this.handleSubmit.bind(this)}>
          <Text>GO To View</Text>
        </TouchableHighlight>
        {showLoading}
        {showError}
      </View>
    )
  }
}
