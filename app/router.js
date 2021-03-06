import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import Main from './components/main';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Repositories from './components/repositories';
import WebView from './components/webView';
import Notes from './components/notes';

var styles = StyleSheet.create({
  leftNavButtonText: {
    padding: 10,
  },
  rightNavButtonText: {

  },
  title: {
    paddingTop: 10
  }
})

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
         onPress={ () => route.onPress() }>
         <Text style={ styles.rightNavButtonText }>
              { route.rightText || 'Right Button' }
         </Text>
       </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>{route.title || "Github Notetaker"}</Text>
  }
};

function renderScene(route, navigator){
  switch(route.name) {
    case 'Main':
      return <Main navigator={navigator} {...route.passProps} />
    case 'Dashboard':
      return <Dashboard navigator={navigator} {...route.passProps} />
    case 'Profile':
      return <Profile navigator={navigator} {...route.passProps} />
    case 'Repositories':
      return <Repositories navigator={navigator} {...route.passProps} />
    case 'WebView':
      return <WebView navigator={navigator} {...route.passProps} />
    case 'Notes':
      return <Notes navigator={navigator} {...route.passProps} />
  }

}

function configureScene(route, routeStack){
  return Navigator.SceneConfigs.PushFromRight
}

const Router = () => (
  <Navigator
    style={{ flex:1 }}
    initialRoute={{ name: 'Main' }}
    renderScene={ renderScene }
    configureScene={ configureScene }
    navigationBar={
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
      />
    }
  />
)

export default Router
