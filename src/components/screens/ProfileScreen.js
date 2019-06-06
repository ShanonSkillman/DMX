//Step 18 add boilerplate code to HomeScreen.js, ProfileScreen.js, SettingsScreen.js

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import UserData from '../userData';

const profilePic = require('../images/profilepic.png')

export default class ProfileScreenName extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Image source={profilePic} style={styles.mainPic} />
        </View>
        <View style={styles.userData}>
        < UserData />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D3F7',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  mainPic: {
    height: 220,
    width: 220,
    borderRadius: 80,
    marginBottom: 400
  },
  userData: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 380,
    bottom: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#EFEDF7',
  }

})