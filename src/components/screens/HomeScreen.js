//Step 18 add boilerplate code to HomeScreen.js, ProfileScreen.js, SettingsScreen.js

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
export default class HomeScreenName extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Testing HomeScreen Name</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
})