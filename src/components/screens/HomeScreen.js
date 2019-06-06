//Step 18 add boilerplate code to HomeScreen.js, ProfileScreen.js, SettingsScreen.js

import React from 'react'
import {
  StyleSheet,
  View,
  Text,

} from 'react-native'
import { Container, Content, Header, Item, Input, Icon, Button} from 'native-base';
import {AppLoading, Font} from 'expo'
import SearchBar from '../SearchBar';
import AllData from '../AllData';
const logo = require('../images/dmxlogo1.png')

export default class HomeScreenName extends React.Component {
  render() {
    return (
      <Container>
        
      <SearchBar />
        <View>
       <Text style={styles.header}>The Data Marketplace</Text></View>
       <Content><AllData /></Content>
       </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  header: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext-UltraLight',
    backgroundColor: '#CFF0E9'
  }
})