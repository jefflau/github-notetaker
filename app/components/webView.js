import React from 'react';
import {
  WebView,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  }
})

const Web = ({ url }) => (
  <WebView
    style={styles.container}
    source={{uri: url}}
  />
)

Web.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default Web;
