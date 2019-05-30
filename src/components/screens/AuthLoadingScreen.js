import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native'
// import { AsyncStorage } from 'react-native'
// AWS Amplify
import Auth from '@aws-amplify/auth'

//Step 2 Add user token 
export default class AuthLoadingScreen extends React.Component {
  state = {
    userToken: null
  }
  async componentDidMount () {
    await this.loadApp()
  }
  //remember logged in users
  loadApp = async () => {
    await Auth.currentAuthenticatedUser()
    .then(user => {
      this.setState({userToken: user.signInUserSession.accessToken.jwtToken})
    })
    .catch(err => console.log(err))
    this.props.navigation.navigate(this.state.userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
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