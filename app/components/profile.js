import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';

import Badge from './badge';
import Separator from './separator';


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 65,
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

export default class Profile extends React.Component {
  formatTitle(title){
    if(title === 'public_repos'){
      title = title.replace('_', ' ');
    }

    return title.slice(0, 1).toUpperCase() + title.slice(1);
  }
  render(){
    let { userInfo } = this.props;
    let topicArray = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    let list = topicArray.map((item, i) => {
      if(!userInfo[item]){
        return <View key={i}></View>
      } else {
        return (
          <View key={i}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.formatTitle(item)}</Text>
              <Text style={styles.rowContent}>{userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        )
      }
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}
