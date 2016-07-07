import React from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import badge from './badge';
import Separator from './separator';

class Repositories extends React.Component {
  render(){
    let {
      userInfo
    } = this.props;
    return (
      <ScrollView>
        <Badge userInfo={userInfo}/>
      </ScrollView>
    )
  }
}
