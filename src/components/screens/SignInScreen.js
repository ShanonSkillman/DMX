import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, StatusBar, KeyboardAvoidingView, Keyboard, Alert, Animated } from 'react-native';
// AWS Amplify
import Auth from '@aws-amplify/auth'
import { Container, Item, Input, Icon } from 'native-base'
// Load the app logo
const logo = require('../images/dmxlogo1.png')
//Step 4 build out Sign In Screen 
export default class SignInScreen extends React.Component {
    state = {
        username: '',
        password: '',
        fadeIn: new Animated.Value(0),
        fadeOut: new Animated.Value(0),
        isHidden: false
    }

    onChangeText(key, value) {
        this.setState({ [key]: value })
    }

    componentDidMount() {
        this.fadeIn()
    }

    fadeIn() {
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
        this.setState({ isHidden: true })
    }

    fadeOut() {
        Animated.timing(
            this.state.fadeOut,
            {
                toValue: 0,
                duration: 700,
                userNativeDriver: true
            }
        ).start()
        this.setState({ isHidden: false })
    }
    //Step 10 add asyncstorage & touchable opacity import & add user token
    signIn = async () => {
        const { username, password } = this.state
        await Auth.signIn(username, password)
        .then(user => {
          this.setState({ user })
          this.props.navigation.navigate('Authloading')
        })
        .catch(err => {
          if (! err.message) {
            console.log('Error when signing in: ', err)
            Alert.alert('Error when signing in: ', err)
          } else {
            console.log('Error when signing in: ', err.message)
            Alert.alert('Error when signing in: ', err.message)
          }
        })
    }
    render() {
        let { fadeOut, fadeIn, isHidden } = this.state
        return (<SafeAreaView style={styles.container}>
            <StatusBar />
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            {
                                isHidden ?
                                    <Animated.Image source={logo} style={{ opacity: fadeIn, width: 150, height: 150 }} />
                                    :
                                    <Animated.Image source={logo} style={{ opacity: fadeOut, width: 100.46, height: 100 }} />
                            }
                        </View>
                        <Container style={styles.infoContainer}>
                            <View style={styles.infoContainer}>
                                <Text>Please log in to explore the marketplace.</Text>
                                <Item rounded style={styles.itemStyle}>
                                    <Icon
                                        active
                                        name='person'
                                        style={styles.iconStyle}
                                    />
                                    <Input
                                        style={styles.input}
                                        placeholder='Username'
                                        placeholderTextColor='#adb4bc'
                                        keyboardType={'email-address'}
                                        returnKeyType='next'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
                                        onChangeText={value => this.onChangeText('username', value)}
                                    />
                                </Item>
                                <Item rounded style={styles.itemStyle}>
                                    <Icon
                                        active
                                        name='lock'
                                        style={styles.iconStyle}
                                    />
                                    <Input
                                        style={styles.input}
                                        placeholder='Password'
                                        placeholderTextColor='#adb4bc'
                                        returnKeyType='go'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        secureTextEntry={true}
                                        ref='SecondInput'
                                        onChangeText={value => this.onChangeText('password', value)}
                                        onFocus={() => this.fadeOut()}
                                        onEndEditing={() => this.fadeIn()}
                                    />
                                </Item>
                                <TouchableOpacity
                                    onPress={() => this.signIn()}
                                    style={styles.buttonStyle}>
                                    <Text style={styles.buttonText}>
                                        Sign In
                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('ForgetPassword')}
                  >
                    <Text style={styles.buttonText}>Forgot password?</Text>
                </TouchableOpacity>
                            </View>
                        </Container>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDF2E2',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    input: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#5a52a5',
    },
    infoContainer: {
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
        backgroundColor: '#F0F8F5',
    },
    itemStyle: {
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: '#ffffff'
    },
    iconStyle: {
        color: '#5a52a5',
        fontSize: 28,
        marginLeft: 15
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#6E9EC5',
        padding: 14,
        marginBottom: 10,
        borderRadius: 10,
        width: '50%'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#fff",
    },
    logoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 400,
        bottom: 350,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})