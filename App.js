import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookLogin from './src/components/FacebookLogin';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <FacebookLogin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
