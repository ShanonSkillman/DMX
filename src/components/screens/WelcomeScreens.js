//Step 7 Build User Welcome Screen sign in, sign up, forget password

import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
//imported Touchable Opacity creates buttons 

// Load the app logo
const logo = require('../images/logo.png')


export default class WelcomeScreens extends React.Component {
    //Step 8 handleRoute method inside onPress event AKA redirect route onclick
    handleRoute = async (destination) => {
        await this.props.navigation.navigate(destination)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignIn')}
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ForgetPassword')}
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Forget password ?</Text>
                </TouchableOpacity>
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
    buttonStyle: {
        padding: 20,
    },
    textStyle: {
        fontSize: 18,
        padding: 10
    }
})