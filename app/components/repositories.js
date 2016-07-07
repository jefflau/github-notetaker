import React from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Badge from './badge';
import Separator from './separator';
import API from '../utils/api';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  name: {

  }
});

class Repositories extends React.Component {
  openPage(url){
    console.log('the url is' + url)
  }
  render(){
    let {
      userInfo,
      repos
    } = this.props;

    let list = repos.map((repo, i)=>{
      let desc = repo.desc ? <Text>{repo.desc}</Text> : null;
      return (
        <View key={i}>
          <View>
            <TouchableHighlight onPress={this.openPage.bind(this, repo.html_url)} underlayColor='transparent'>
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repo.stargazers_count}</Text>
            {desc}
          </View>
        </View>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo}/>
        <Text>Repositories</Text>
        {list}
      </ScrollView>
    )
  }
}

Repositories.propType = {
  userInfo: React.PropTypes.object.isRequired,
  repo: React.PropTypes.array.isRequired
}

export default Repositories
